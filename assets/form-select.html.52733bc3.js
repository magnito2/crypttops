import{_ as e,r as t,o,c as p,b as l,a as s,e as n,d as r}from"./app.0c602c3b.js";const c={},i=s("h1",{id:"input",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#input","aria-hidden":"true"},"#"),n(" Input")],-1),d=s("p",null,"Select Field",-1),u=s("h4",{id:"preview",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#preview","aria-hidden":"true"},"#"),n(" Preview")],-1),v=r(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@magnito2/crypttops-library/formelements&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        Select
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Select
            <span class="token operator">:</span>options<span class="token operator">=</span><span class="token string">&quot;[&#39;Tier 0&#39;, &#39;Tier 1&#39;, &#39;Tier 2&#39;]&quot;</span>
            defaultText <span class="token operator">=</span> <span class="token string">&quot;Select tier&quot;</span>
            v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;selected&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(m,b){const a=t("Demo");return o(),p("div",null,[i,d,u,l(a,{componentName:"examples-form-select-doc"}),v])}var _=e(c,[["render",k],["__file","form-select.html.vue"]]);export{_ as default};
