import{_ as s,r as a,o as e,c as t,b as p,d as o}from"./app.0c602c3b.js";const r={},i=o(`<h1 id="datepicker-input" tabindex="-1"><a class="header-anchor" href="#datepicker-input" aria-hidden="true">#</a> Datepicker Input</h1><p>Use this a modified version of date picker. It uses a custom version of datepicker in place of the default one.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@magnito2/crypttops-library/formelements&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        DatePicker2
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">startDate</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>date<span class="token operator">-</span>picker
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;startDate&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="preview" tabindex="-1"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h4>`,5);function c(l,d){const n=a("Demo");return e(),t("div",null,[i,p(n,{componentName:"examples-date-picker-2-doc"})])}var k=s(r,[["render",c],["__file","date-picker-2.html.vue"]]);export{k as default};
