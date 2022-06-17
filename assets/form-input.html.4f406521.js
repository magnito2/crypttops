import{_ as e,r as t,o as p,c as o,b as n,d as a}from"./app.0c602c3b.js";const r={},i=a(`<h1 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h1><p>Use this input element to get info from the user in Signup and Login forms. Fields included include username, email and password You can customize the field by passing custom icon or change placeholder text</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="_1-as-a-username-input-element" tabindex="-1"><a class="header-anchor" href="#_1-as-a-username-input-element" aria-hidden="true">#</a> 1. As a username input element</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@magnito2/crypttops-library/formelements&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        Input
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Input
            placeholder<span class="token operator">=</span><span class="token string">&quot;Your Prefered Username&quot;</span>
            type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span>
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;username&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h4>`,6),l=a(`<h3 id="_2-as-an-email-input-element" tabindex="-1"><a class="header-anchor" href="#_2-as-an-email-input-element" aria-hidden="true">#</a> 2. As an email input element</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Input
            placeholder<span class="token operator">=</span><span class="token string">&quot;Your Prefered Email&quot;</span>
            type<span class="token operator">=</span><span class="token string">&quot;email&quot;</span>
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;email&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview-1" tabindex="-1"><a class="header-anchor" href="#preview-1" aria-hidden="true">#</a> Preview</h4>`,3),c=a(`<h3 id="_3-as-a-password-input-element" tabindex="-1"><a class="header-anchor" href="#_3-as-a-password-input-element" aria-hidden="true">#</a> 3. As a password input element</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Input
            placeholder<span class="token operator">=</span><span class="token string">&quot;Your Prefered Password&quot;</span>
            type<span class="token operator">=</span><span class="token string">&quot;password&quot;</span>
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;password&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview-2" tabindex="-1"><a class="header-anchor" href="#preview-2" aria-hidden="true">#</a> Preview</h4>`,3);function d(u,v){const s=t("Demo");return p(),o("div",null,[i,n(s,{componentName:"examples-form-input-doc"}),l,n(s,{componentName:"examples-form-input-doc2"}),c,n(s,{componentName:"examples-form-input-doc3"})])}var k=e(r,[["render",d],["__file","form-input.html.vue"]]);export{k as default};