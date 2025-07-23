const e={title:"Styles/Layout"},a=()=>`
<main class="container">
    <div class="row">
        <figure class="col-12 md:order-last lg:col-3 mb-md md:mb-md">
            <img src="https://placecats.com/600/600" alt="kitten">
        </figure>

        <div class="col-12 md:col-6 lg:col-9">
            <h1>This is a page title</h1>
            <p>Welcome to our grid-based page.</p>
        </div>
    </div>
</main>
`.trim(),s=()=>`
<style type="text/css">
    .frame {
        background: red;
        padding: var(--fmxe-space-inset-md);
    }

    .frame:first-child {
        margin-bottom: var(--fmxe-space-stack-sm);
    }

    .inner {
        background: white;
        padding: var(--fmxe-space-inset-lg);
    }
</style>

<main>
    <figure class="frame">
        <div class="inner">
            space-inset-lg
        </div>
    </figure>

    <figure class="frame">
        <div class="inner">
            space-inset-lg
        </div>
    </figure>
</main>
`.trim(),c=()=>`
<div class="card" style="width: 18rem;">
  <img src="https://placecats.com/800/500" class="card-img" alt="kitten">

  <div class="card-body">
    <h3 class="card-title">
        Card title
    </h3>
    <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
    </p>
  </div>
</div>
`.trim(),d=()=>`
<div class="card-deck">
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>
</div>
`.trim();a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<main class="container">
    <div class="row">
        <figure class="col-12 md:order-last lg:col-3 mb-md md:mb-md">
            <img src="https://placecats.com/600/600" alt="kitten">
        </figure>

        <div class="col-12 md:col-6 lg:col-9">
            <h1>This is a page title</h1>
            <p>Welcome to our grid-based page.</p>
        </div>
    </div>
</main>
\`.trim()`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<style type="text/css">
    .frame {
        background: red;
        padding: var(--fmxe-space-inset-md);
    }

    .frame:first-child {
        margin-bottom: var(--fmxe-space-stack-sm);
    }

    .inner {
        background: white;
        padding: var(--fmxe-space-inset-lg);
    }
</style>

<main>
    <figure class="frame">
        <div class="inner">
            space-inset-lg
        </div>
    </figure>

    <figure class="frame">
        <div class="inner">
            space-inset-lg
        </div>
    </figure>
</main>
\`.trim()`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<div class="card" style="width: 18rem;">
  <img src="https://placecats.com/800/500" class="card-img" alt="kitten">

  <div class="card-body">
    <h3 class="card-title">
        Card title
    </h3>
    <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
    </p>
  </div>
</div>
\`.trim()`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<div class="card-deck">
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            <h3 class="card-title">
                I'm a card
            </h3>
        </div>
    </div>
</div>
\`.trim()`,...d.parameters?.docs?.source}}};const r=["Grid","Spacing","Cards","CardDecks"];export{d as CardDecks,c as Cards,a as Grid,s as Spacing,r as __namedExportsOrder,e as default};
