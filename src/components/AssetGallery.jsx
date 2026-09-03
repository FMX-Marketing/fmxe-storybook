import React from 'react';
import { createRoot } from 'react-dom/client';
import './AssetGallery.css';

function AssetItem({ name, renderAsset, align }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      const label = ref.current.querySelector('.asset-gallery-label');
      Array.from(ref.current.childNodes).forEach(child => {
        if (child !== label) child.remove();
      });
      ref.current.insertBefore(renderAsset(name), label);
    }
  }, [name, renderAsset]);

  return (
    <div ref={ref} className="asset-gallery-item" style={{ '--_align': align }}>
      <pre className="asset-gallery-label">{name}</pre>
    </div>
  );
}

function AssetGalleryComponent({ names, renderAsset, theme = 'light', columns = 4, align = 'center', background = null }) {
  const style = {
    '--_columns': columns,
    ...(background ? { backgroundColor: background } : {}),
  };

  return (
    <div
      className="asset-gallery"
      data-theme={theme === 'dark' ? 'dark' : undefined}
      style={style}
    >
      {names.map((name) => (
        <AssetItem key={name} name={name} renderAsset={renderAsset} align={align} />
      ))}
    </div>
  );
}

export function AssetGallery(props) {
  const container = document.createElement('div');
  createRoot(container).render(<AssetGalleryComponent {...props} />);
  return container;
}
