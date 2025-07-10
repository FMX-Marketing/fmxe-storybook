import React from 'react';
import { tokensData } from './tokens-data';

export function TokensTable({ category }) {
    let data
    let numCategories
    
    if (category) {
        data = {}
        data[category] = tokensData[category]
        numCategories = 1
    } else {
        data = tokensData
        numCategories = Object.keys(data).length
    }

    return Object.entries(data).map(([category, tokens]) => (
        <div key={category}>
            {numCategories > 1 ? <h2>{category}</h2> : ''}

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Token</th>
                        <th>Value</th>
                        <th>Figma usage</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(tokens).map(([token, props]) => (
                        <tr key={token}>
                            <td>
                                {previewToken(props)}
                            </td>
                            <td><code>{token}</code></td>
                            <td><code>{props.cssValue}</code></td>
                            <td>{props.figmaValue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ));
}

function previewToken(value) {
    return (
        <span class="token-preview" style={value.cssProps}>
            {value.previewText}
        </span>
    )
}
