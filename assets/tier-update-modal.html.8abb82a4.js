import{_ as e,r as t,o,c as p,b as l,a as n,e as s,d as c}from"./app.0c602c3b.js";const r={},i=n("h1",{id:"tierupdatemodal",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tierupdatemodal","aria-hidden":"true"},"#"),s(" TierUpdateModal")],-1),d=n("h2",{id:"preview",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#preview","aria-hidden":"true"},"#"),s(" Preview")],-1),u=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TierUpdateModal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@magnito2/crypttops-library/modals&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> TierUpdateModal <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">tierUpdateData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">tier</span><span class="token operator">:</span> <span class="token string">&#39;Tier 0&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">date</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">&#39;Inactive&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">tradingVol</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">rewards</span><span class="token operator">:</span> <span class="token string">&#39;0&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">showModal</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">toggleModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>showModal <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>showModal<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>showModal <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>TierUpdateModal v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;showModal&quot;</span> <span class="token operator">:</span>closeModal<span class="token operator">=</span><span class="token string">&quot;closeModal&quot;</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;tierUpdateData&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><ul><li><code>showModal</code> - A boolean value to close the modal when false</li><li><code>closeModal</code> - A function that when called will close the modal</li><li><code>v-model</code> - An object passed to v-model with fields <code>tier</code>, <code>date</code>, <code>status</code>, <code>tradingVol</code> and <code>rewards</code></li></ul><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2><p>A modal needs to be removed from the normal flow of the container, thus, the best place to insert it is before the <code>&lt;/body&gt;</code> closing tag. Thus, the modal should be located in the root component at the bottom, or in a <code>&lt;Teleport&gt;</code> vue element which references an element near the bottom of the page.</p>`,6);function k(v,m){const a=t("Demo");return o(),p("div",null,[i,d,l(a,{componentName:"examples-tier-update-modal-doc"}),u])}var b=e(r,[["render",k],["__file","tier-update-modal.html.vue"]]);export{b as default};
