import{_ as e,r as t,o as p,c as o,b as s,d as a}from"./app.0c602c3b.js";const r={},i=a(`<h1 id="api-input" tabindex="-1"><a class="header-anchor" href="#api-input" aria-hidden="true">#</a> API Input</h1><p>Use this input element to get info from the user in API Key and API Secret fields.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="_1-as-a-api-key-form" tabindex="-1"><a class="header-anchor" href="#_1-as-a-api-key-form" aria-hidden="true">#</a> 1. As a API Key Form</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> APIInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@magnito2/crypttops-library/formelements&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        APIInput
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">APIKey</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>APIInput
            type<span class="token operator">=</span><span class="token string">&quot;key&quot;</span>
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;APIKey&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h4>`,6),l=a(`<h3 id="_2-as-an-api-secret-element" tabindex="-1"><a class="header-anchor" href="#_2-as-an-api-secret-element" aria-hidden="true">#</a> 2. As an API Secret element</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>APIInput
            type<span class="token operator">=</span><span class="token string">&quot;secret&quot;</span>
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;APISecret&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview-1" tabindex="-1"><a class="header-anchor" href="#preview-1" aria-hidden="true">#</a> Preview</h4>`,3);function c(d,u){const n=t("Demo");return p(),o("div",null,[i,s(n,{componentName:"examples-api-key-input-doc"}),l,s(n,{componentName:"examples-api-secret-input-doc"})])}var k=e(r,[["render",c],["__file","api-input.html.vue"]]);export{k as default};
