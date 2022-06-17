import{_ as e,r as t,o,c as p,b as c,a as n,e as s,d as i}from"./app.0c602c3b.js";const r={},l=n("h1",{id:"cta-button",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cta-button","aria-hidden":"true"},"#"),s(" CTA Button")],-1),d=n("p",null,"Call to action button",-1),u=n("h2",{id:"preview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#preview","aria-hidden":"true"},"#"),s(" Preview")],-1),k=i(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CTAButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@magnito2/crypttops-library&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">clicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;You clicked me&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>CTAButton
            value<span class="token operator">=</span><span class="token string">&quot;Join our LeaderBoard&quot;</span>
            <span class="token operator">:</span>action<span class="token operator">=</span><span class="token string">&quot;clicked&quot;</span>
        <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><ul><li><code>value</code> - Text to be displayed on the button</li><li><code>action</code> - Action to be performed when the button is clicked</li></ul>`,4);function v(m,b){const a=t("Demo");return o(),p("div",null,[l,d,u,c(a,{componentName:"examples-cta-button-doc"}),k])}var _=e(r,[["render",v],["__file","cta-button.html.vue"]]);export{_ as default};
