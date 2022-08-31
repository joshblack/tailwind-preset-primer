import tokens from '@primer/primitives';
import { useEffect, useState } from 'react';

export default function IndexPage() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (theme !== '') {
      document.body.classList.add(`theme-${theme}`);
      return () => {
        document.body.classList.remove(`theme-${theme}`);
      };
    }
  }, [theme]);

  return (
    <>
      <main>
        <div className="flex justify-between items-center bg-white border-b-2 border-black sticky top-0 p-2">
          <h1 className="text-xl">Tailwind examples</h1>
          <div className="flex flex-col">
            <label htmlFor="theme">Theme</label>
            <select
              className="border-2 border-black"
              id="theme"
              value={theme}
              onChange={(event) => {
                setTheme(event.target.value);
              }}>
              <option value=""></option>
              <option value="dark">Dark</option>
              <option value="dark-colorblind">Dark colorblind</option>
              <option value="dark-dimmed">Dark dimmed</option>
              <option value="dark-high-contrast">Dark high contrast</option>
              <option value="dark-tritanopia">Dark tritanopia</option>
              <option value="light">Light</option>
              <option value="light-colorblind">Light colorblind</option>
              <option value="light-high-contrast">Light high contrast</option>
              <option value="light-tritanopia">Light tritanopia</option>
            </select>
          </div>
        </div>
        <section>
          <h2 className="text-lg">Scale</h2>
          <div className="grid grid-cols-4 gap-4 p-4">
            <article>
              <header>Black</header>
              <ul>
                <li className="bg-black border-2 border-black h-6" />
              </ul>
            </article>
            <article>
              <header>White</header>
              <ul>
                <li className="bg-white border-2 border-black h-6" />
              </ul>
            </article>
            <article>
              <header>gray</header>
              <ul>
                <li className="bg-gray-0 h-6" />
                <li className="bg-gray-1 h-6" />
                <li className="bg-gray-2 h-6" />
                <li className="bg-gray-3 h-6" />
                <li className="bg-gray-4 h-6" />
                <li className="bg-gray-5 h-6" />
                <li className="bg-gray-6 h-6" />
                <li className="bg-gray-7 h-6" />
                <li className="bg-gray-8 h-6" />
                <li className="bg-gray-9 h-6" />
              </ul>
            </article>
            <article>
              <header>blue</header>
              <ul>
                <li className="bg-blue-0 h-6" />
                <li className="bg-blue-1 h-6" />
                <li className="bg-blue-2 h-6" />
                <li className="bg-blue-3 h-6" />
                <li className="bg-blue-4 h-6" />
                <li className="bg-blue-5 h-6" />
                <li className="bg-blue-6 h-6" />
                <li className="bg-blue-7 h-6" />
                <li className="bg-blue-8 h-6" />
                <li className="bg-blue-9 h-6" />
              </ul>
            </article>
            <article>
              <header>green</header>
              <ul>
                <li className="bg-green-0 h-6" />
                <li className="bg-green-1 h-6" />
                <li className="bg-green-2 h-6" />
                <li className="bg-green-3 h-6" />
                <li className="bg-green-4 h-6" />
                <li className="bg-green-5 h-6" />
                <li className="bg-green-6 h-6" />
                <li className="bg-green-7 h-6" />
                <li className="bg-green-8 h-6" />
                <li className="bg-green-9 h-6" />
              </ul>
            </article>
            <article>
              <header>yellow</header>
              <ul>
                <li className="bg-yellow-0 h-6" />
                <li className="bg-yellow-1 h-6" />
                <li className="bg-yellow-2 h-6" />
                <li className="bg-yellow-3 h-6" />
                <li className="bg-yellow-4 h-6" />
                <li className="bg-yellow-5 h-6" />
                <li className="bg-yellow-6 h-6" />
                <li className="bg-yellow-7 h-6" />
                <li className="bg-yellow-8 h-6" />
                <li className="bg-yellow-9 h-6" />
              </ul>
            </article>
            <article>
              <header>orange</header>
              <ul>
                <li className="bg-orange-0 h-6" />
                <li className="bg-orange-1 h-6" />
                <li className="bg-orange-2 h-6" />
                <li className="bg-orange-3 h-6" />
                <li className="bg-orange-4 h-6" />
                <li className="bg-orange-5 h-6" />
                <li className="bg-orange-6 h-6" />
                <li className="bg-orange-7 h-6" />
                <li className="bg-orange-8 h-6" />
                <li className="bg-orange-9 h-6" />
              </ul>
            </article>
            <article>
              <header>red</header>
              <ul>
                <li className="bg-red-0 h-6" />
                <li className="bg-red-1 h-6" />
                <li className="bg-red-2 h-6" />
                <li className="bg-red-3 h-6" />
                <li className="bg-red-4 h-6" />
                <li className="bg-red-5 h-6" />
                <li className="bg-red-6 h-6" />
                <li className="bg-red-7 h-6" />
                <li className="bg-red-8 h-6" />
                <li className="bg-red-9 h-6" />
              </ul>
            </article>
            <article>
              <header>purple</header>
              <ul>
                <li className="bg-purple-0 h-6" />
                <li className="bg-purple-1 h-6" />
                <li className="bg-purple-2 h-6" />
                <li className="bg-purple-3 h-6" />
                <li className="bg-purple-4 h-6" />
                <li className="bg-purple-5 h-6" />
                <li className="bg-purple-6 h-6" />
                <li className="bg-purple-7 h-6" />
                <li className="bg-purple-8 h-6" />
                <li className="bg-purple-9 h-6" />
              </ul>
            </article>
            <article>
              <header>pink</header>
              <ul>
                <li className="bg-pink-0 h-6" />
                <li className="bg-pink-1 h-6" />
                <li className="bg-pink-2 h-6" />
                <li className="bg-pink-3 h-6" />
                <li className="bg-pink-4 h-6" />
                <li className="bg-pink-5 h-6" />
                <li className="bg-pink-6 h-6" />
                <li className="bg-pink-7 h-6" />
                <li className="bg-pink-8 h-6" />
                <li className="bg-pink-9 h-6" />
              </ul>
            </article>
            <article>
              <header>coral</header>
              <ul>
                <li className="bg-coral-0 h-6" />
                <li className="bg-coral-1 h-6" />
                <li className="bg-coral-2 h-6" />
                <li className="bg-coral-3 h-6" />
                <li className="bg-coral-4 h-6" />
                <li className="bg-coral-5 h-6" />
                <li className="bg-coral-6 h-6" />
                <li className="bg-coral-7 h-6" />
                <li className="bg-coral-8 h-6" />
                <li className="bg-coral-9 h-6" />
              </ul>
            </article>
          </div>
        </section>
        <section>
          <h2 className="text-lg">Tokens</h2>
          <div className="grid grid-cols-4 gap-4 p-4">
            <figure>
              <div className="bg-canvas-default-transparent border-b-2 border-black h-6" />
              <figcaption>
                <code>canvas-default-transparent</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-page-header-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>page-header-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-marketing-icon-primary border-b-2 border-black h-6" />
              <figcaption>
                <code>marketing-icon-primary</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-marketing-icon-secondary border-b-2 border-black h-6" />
              <figcaption>
                <code>marketing-icon-secondary</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-addition-num-text border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-addition-num-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-addition-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-addition-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-addition-num-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-addition-num-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-addition-line-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-addition-line-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-addition-word-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-addition-word-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-deletion-num-text border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-deletion-num-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-deletion-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-deletion-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-deletion-num-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-deletion-num-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-deletion-line-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-deletion-line-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-deletion-word-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-deletion-word-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-hunk-num-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-hunk-num-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-expander-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-expander-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diff-blob-selected-line-highlight-mix-blend-mode border-b-2 border-black h-6" />
              <figcaption>
                <code>diff-blob-selected-line-highlight-mix-blend-mode</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diffstat-deletion-border border-b-2 border-black h-6" />
              <figcaption>
                <code>diffstat-deletion-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diffstat-addition-border border-b-2 border-black h-6" />
              <figcaption>
                <code>diffstat-addition-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-diffstat-addition-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>diffstat-addition-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-search-keyword-hl border-b-2 border-black h-6" />
              <figcaption>
                <code>search-keyword-hl</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-comment border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-comment</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-constant border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-constant</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-entity border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-entity</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-storage-modifier-import border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-storage-modifier-import</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-entity-tag border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-entity-tag</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-keyword border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-keyword</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-string border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-string</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-variable border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-variable</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-brackethighlighter-unmatched border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-brackethighlighter-unmatched</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-invalid-illegal-text border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-invalid-illegal-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-invalid-illegal-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-invalid-illegal-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-carriage-return-text border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-carriage-return-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-carriage-return-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-carriage-return-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-string-regexp border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-string-regexp</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-list border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-list</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-heading border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-heading</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-italic border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-italic</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-bold border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-bold</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-deleted-text border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-deleted-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-deleted-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-deleted-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-inserted-text border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-inserted-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-inserted-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-inserted-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-changed-text border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-changed-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-changed-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-changed-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-ignored-text border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-ignored-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-markup-ignored-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-markup-ignored-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-meta-diff-range border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-meta-diff-range</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-brackethighlighter-angle border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-brackethighlighter-angle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-sublimelinter-gutter-mark border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-sublimelinter-gutter-mark</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-prettylights-syntax-constant-other-reference-link border-b-2 border-black h-6" />
              <figcaption>
                <code>prettylights-syntax-constant-other-reference-link</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-text border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-gutters-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-gutters-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-guttermarker-text border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-guttermarker-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-guttermarker-subtle-text border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-guttermarker-subtle-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-linenumber-text border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-linenumber-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-cursor border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-cursor</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-selection-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-selection-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-activeline-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-activeline-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-matchingbracket-text border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-matchingbracket-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-lines-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-lines-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-comment border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-comment</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-constant border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-constant</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-entity border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-entity</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-keyword border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-keyword</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-storage border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-storage</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-string border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-string</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-support border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-support</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-codemirror-syntax-variable border-b-2 border-black h-6" />
              <figcaption>
                <code>codemirror-syntax-variable</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-run-border-width border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-run-border-width</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-container-border-width border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-container-border-width</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-text-primary border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-text-primary</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-text-secondary border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-text-secondary</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-text-link border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-text-link</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-btn-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-btn-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-btn-hover-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-btn-hover-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-btn-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-btn-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-input-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-input-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-input-placeholder-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-input-placeholder-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-input-focus-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-input-focus-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-input-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-input-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-input-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-input-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-donut-error border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-donut-error</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-donut-pending border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-donut-pending</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-donut-success border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-donut-success</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-donut-neutral border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-donut-neutral</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-border border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-hover-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-hover-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-btn-hover-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-btn-hover-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-dropdown-btn-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-dropdown-btn-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-scrollbar-thumb-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-scrollbar-thumb-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-header-label-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-header-label-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-header-label-open-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-header-label-open-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-header-border border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-header-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-header-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-header-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-num-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-num-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-timestamp-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-timestamp-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-selected-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-selected-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-selected-num-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-selected-num-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-dt-fm-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-dt-fm-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-line-dt-fm-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-line-dt-fm-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-gate-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-gate-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-gate-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-gate-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-gate-waiting-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-gate-waiting-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-step-header-open-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-step-header-open-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-step-error-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-step-error-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-step-warning-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-step-warning-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-num-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-num-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-debug-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-debug-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-error-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-error-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-error-num-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-error-num-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-error-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-error-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-warning-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-warning-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-warning-num-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-warning-num-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-warning-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-warning-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-command-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-command-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-logline-section-text border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-logline-section-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-black border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-black</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-black-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-black-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-white border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-white</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-white-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-white-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-gray border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-gray</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-red border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-red</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-red-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-red-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-green border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-green</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-green-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-green-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-yellow border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-yellow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-yellow-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-yellow-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-blue border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-blue</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-blue-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-blue-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-magenta border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-magenta</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-magenta-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-magenta-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-cyan border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-cyan</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-checks-ansi-cyan-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>checks-ansi-cyan-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-project-header-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>project-header-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-project-sidebar-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>project-sidebar-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-project-gradient-in border-b-2 border-black h-6" />
              <figcaption>
                <code>project-gradient-in</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-project-gradient-out border-b-2 border-black h-6" />
              <figcaption>
                <code>project-gradient-out</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-mktg-btn-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>mktg-btn-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-mktg-btn-shadow-outline border-b-2 border-black h-6" />
              <figcaption>
                <code>mktg-btn-shadow-outline</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-mktg-btn-shadow-focus border-b-2 border-black h-6" />
              <figcaption>
                <code>mktg-btn-shadow-focus</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-mktg-btn-shadow-hover border-b-2 border-black h-6" />
              <figcaption>
                <code>mktg-btn-shadow-hover</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-mktg-btn-shadow-hover-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>mktg-btn-shadow-hover-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-avatar-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>avatar-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-avatar-border border-b-2 border-black h-6" />
              <figcaption>
                <code>avatar-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-avatar-stack-fade border-b-2 border-black h-6" />
              <figcaption>
                <code>avatar-stack-fade</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-avatar-stack-fade-more border-b-2 border-black h-6" />
              <figcaption>
                <code>avatar-stack-fade-more</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-avatar-child-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>avatar-child-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-topic-tag-border border-b-2 border-black h-6" />
              <figcaption>
                <code>topic-tag-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-counter-border border-b-2 border-black h-6" />
              <figcaption>
                <code>counter-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-select-menu-backdrop-border border-b-2 border-black h-6" />
              <figcaption>
                <code>select-menu-backdrop-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-select-menu-tap-highlight border-b-2 border-black h-6" />
              <figcaption>
                <code>select-menu-tap-highlight</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-select-menu-tap-focus-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>select-menu-tap-focus-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-overlay-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>overlay-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-header-text border-b-2 border-black h-6" />
              <figcaption>
                <code>header-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-header-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>header-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-header-divider border-b-2 border-black h-6" />
              <figcaption>
                <code>header-divider</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-header-logo border-b-2 border-black h-6" />
              <figcaption>
                <code>header-logo</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-header-search-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>header-search-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-header-search-border border-b-2 border-black h-6" />
              <figcaption>
                <code>header-search-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-sidenav-selected-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>sidenav-selected-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-menu-bg-active border-b-2 border-black h-6" />
              <figcaption>
                <code>menu-bg-active</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-input-disabled-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>input-disabled-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-timeline-badge-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>timeline-badge-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-black border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-black</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-black-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-black-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-white border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-white</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-white-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-white-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-gray border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-gray</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-red border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-red</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-red-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-red-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-green border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-green</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-green-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-green-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-yellow border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-yellow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-yellow-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-yellow-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-blue border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-blue</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-blue-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-blue-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-magenta border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-magenta</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-magenta-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-magenta-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-cyan border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-cyan</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-ansi-cyan-bright border-b-2 border-black h-6" />
              <figcaption>
                <code>ansi-cyan-bright</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-inset-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-inset-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-hover-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-hover-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-active-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-active-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-active-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-active-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-selected-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-selected-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-focus-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-focus-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-focus-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-focus-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-focus-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-focus-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-shadow-active border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-shadow-active</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-shadow-input-focus border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-shadow-input-focus</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-inset-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-inset-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-hover-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-hover-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-selected-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-selected-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-selected-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-selected-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-disabled-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-disabled-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-disabled-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-disabled-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-disabled-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-disabled-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-focus-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-focus-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-focus-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-focus-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-focus-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-focus-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-primary-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-primary-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-hover-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-hover-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-hover-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-hover-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-hover-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-hover-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-hover-inset-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-hover-inset-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-hover-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-hover-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-selected-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-selected-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-selected-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-selected-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-selected-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-selected-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-selected-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-selected-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-disabled-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-disabled-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-disabled-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-disabled-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-disabled-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-disabled-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-focus-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-focus-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-focus-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-focus-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-outline-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-outline-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-hover-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-hover-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-hover-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-hover-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-hover-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-hover-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-hover-inset-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-hover-inset-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-hover-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-hover-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-hover-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-hover-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-selected-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-selected-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-selected-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-selected-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-selected-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-selected-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-selected-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-selected-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-disabled-text border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-disabled-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-disabled-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-disabled-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-disabled-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-disabled-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-focus-border border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-focus-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-focus-shadow border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-focus-shadow</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-counter-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-counter-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-btn-danger-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>btn-danger-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-underlinenav-icon border-b-2 border-black h-6" />
              <figcaption>
                <code>underlinenav-icon</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-underlinenav-border-hover border-b-2 border-black h-6" />
              <figcaption>
                <code>underlinenav-border-hover</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-inline-divider border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-inline-divider</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-default-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-default-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-default-hover-border border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-default-hover-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-default-active-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-default-active-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-default-active-border border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-default-active-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-default-selected-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-default-selected-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-danger-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-danger-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-danger-active-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-danger-active-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-action-list-item-danger-hover-text border-b-2 border-black h-6" />
              <figcaption>
                <code>action-list-item-danger-hover-text</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-track-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-track-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-track-border border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-track-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-track-checked-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-track-checked-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-track-checked-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-track-checked-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-track-checked-active-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-track-checked-active-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-track-checked-border border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-track-checked-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-knob-checked-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-knob-checked-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-switch-knob-checked-disabled-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>switch-knob-checked-disabled-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-segmented-control-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>segmented-control-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-segmented-control-button-hover-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>segmented-control-button-hover-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-segmented-control-button-active-bg border-b-2 border-black h-6" />
              <figcaption>
                <code>segmented-control-button-active-bg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-segmented-control-button-selected-border border-b-2 border-black h-6" />
              <figcaption>
                <code>segmented-control-button-selected-border</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-fg-default border-b-2 border-black h-6" />
              <figcaption>
                <code>fg-default</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-fg-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>fg-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-fg-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>fg-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-fg-on-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>fg-on-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-canvas-default border-b-2 border-black h-6" />
              <figcaption>
                <code>canvas-default</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-canvas-overlay border-b-2 border-black h-6" />
              <figcaption>
                <code>canvas-overlay</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-canvas-inset border-b-2 border-black h-6" />
              <figcaption>
                <code>canvas-inset</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-canvas-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>canvas-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-border-default border-b-2 border-black h-6" />
              <figcaption>
                <code>border-default</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-border-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>border-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-border-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>border-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-shadow-small border-b-2 border-black h-6" />
              <figcaption>
                <code>shadow-small</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-shadow-medium border-b-2 border-black h-6" />
              <figcaption>
                <code>shadow-medium</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-shadow-large border-b-2 border-black h-6" />
              <figcaption>
                <code>shadow-large</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-shadow-extra-large border-b-2 border-black h-6" />
              <figcaption>
                <code>shadow-extra-large</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-neutral-emphasis-plus border-b-2 border-black h-6" />
              <figcaption>
                <code>neutral-emphasis-plus</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-neutral-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>neutral-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-neutral-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>neutral-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-neutral-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>neutral-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-accent-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>accent-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-accent-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>accent-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-accent-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>accent-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-accent-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>accent-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-success-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>success-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-success-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>success-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-success-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>success-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-success-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>success-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-attention-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>attention-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-attention-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>attention-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-attention-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>attention-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-attention-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>attention-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-severe-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>severe-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-severe-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>severe-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-severe-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>severe-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-severe-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>severe-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-danger-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>danger-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-danger-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>danger-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-danger-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>danger-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-danger-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>danger-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-open-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>open-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-open-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>open-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-open-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>open-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-open-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>open-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-closed-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>closed-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-closed-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>closed-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-closed-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>closed-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-closed-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>closed-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-done-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>done-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-done-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>done-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-done-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>done-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-done-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>done-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-sponsors-fg border-b-2 border-black h-6" />
              <figcaption>
                <code>sponsors-fg</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-sponsors-emphasis border-b-2 border-black h-6" />
              <figcaption>
                <code>sponsors-emphasis</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-sponsors-muted border-b-2 border-black h-6" />
              <figcaption>
                <code>sponsors-muted</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-sponsors-subtle border-b-2 border-black h-6" />
              <figcaption>
                <code>sponsors-subtle</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-fg-disabled border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-fg-disabled</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-canvas-backdrop border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-canvas-backdrop</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-canvas-sticky border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-canvas-sticky</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-border-active border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-border-active</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-border-contrast border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-border-contrast</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-shadow-highlight border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-shadow-highlight</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-shadow-inset border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-shadow-inset</code>
              </figcaption>
            </figure>
            <figure>
              <div className="bg-primer-shadow-focus border-b-2 border-black h-6" />
              <figcaption>
                <code>primer-shadow-focus</code>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}

// <main>
// <h1>Hello world</h1>
// <section>
// <h2>Color</h2>
// <section>
// <h2>Tokens</h2>
// </section>
// <section>
// <h2>Scale</h2>
// {Object.entries(tokens.colors.dark.scale).map(([key, value]) => {
// return (
// <article key={key}>
// <header>{key}</header>
// <ul>
// {Array.isArray(value) ? null : <li className="flex items-center gap-4">{value} <div className="w-6 h-6 bg-black" /></li>}
// </ul>
// </article>
// );
// })}
// </section>
// </section>
// <section>
// <h2>Typography</h2>
// <p className="text-sm">The quick brown fox ...</p>
// <p className="text-base">The quick brown fox ...</p>
// <p className="text-lg">The quick brown fox ...</p>
// <p className="text-xl">The quick brown fox ...</p>
// <p className="text-2xl">The quick brown fox ...</p>
// </section>
// <section>
// <h2>Spacing</h2>
// </section>
// </main>
