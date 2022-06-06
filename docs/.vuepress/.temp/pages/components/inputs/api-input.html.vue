<template><div><h1 id="api-input" tabindex="-1"><a class="header-anchor" href="#api-input" aria-hidden="true">#</a> API Input</h1>
<p>Use this input element to get info from the user in API Key and API Secret fields.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="_1-as-a-api-key-form" tabindex="-1"><a class="header-anchor" href="#_1-as-a-api-key-form" aria-hidden="true">#</a> 1. As a API Key Form</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> APIInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@magnito/crypttops-library'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        APIInput
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>APIInput
            type<span class="token operator">=</span><span class="token string">"key"</span>
        <span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h4>
<Demo componentName="examples-api-key-input-doc" />
<h3 id="_2-as-an-api-secret-element" tabindex="-1"><a class="header-anchor" href="#_2-as-an-api-secret-element" aria-hidden="true">#</a> 2. As an API Secret element</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>APIInput
            type<span class="token operator">=</span><span class="token string">"secret"</span>
        <span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview-1" tabindex="-1"><a class="header-anchor" href="#preview-1" aria-hidden="true">#</a> Preview</h4>
<Demo componentName="examples-api-secret-input-doc" /></div></template>
