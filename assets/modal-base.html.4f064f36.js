import{_ as e,r as o,o as t,c as p,b as l,a,e as s,d as c}from"./app.0c602c3b.js";const r={},i=a("h1",{id:"base-modal",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#base-modal","aria-hidden":"true"},"#"),s(" Base Modal")],-1),d=a("p",null,"Base component for creating modals. Use this as a container for modals",-1),u=a("h2",{id:"preview",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#preview","aria-hidden":"true"},"#"),s(" Preview")],-1),k=c(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ModalBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@magnito2/crypttops-library/modals&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> ModalBase <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
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
        <span class="token operator">&lt;</span>ModalBase v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;showModal&quot;</span> <span class="token operator">:</span>closeModal<span class="token operator">=</span><span class="token string">&quot;closeModal&quot;</span> lightBg<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Content to be shown <span class="token keyword">in</span> modal <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ModalBase<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><ul><li><code>showModal</code> - A bolean value what will display modal when true</li><li><code>closeModal</code> - A function that when called will close the modal</li><li><code>lightBg</code> - A boolean value to make the background color more transparent</li></ul><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h2><p>A modal needs to be removed from the normal flow of the container, thus, the best place to insert it is before the <code>&lt;/body&gt;</code> closing tag. Thus, the modal should be located in the root component at the bottom, or in a <code>&lt;Teleport&gt;</code> vue element which references an element near the bottom of the page.</p>`,6);function m(v,h){const n=o("Demo");return t(),p("div",null,[i,d,u,l(n,{componentName:"examples-modal-base-doc"}),k])}var g=e(r,[["render",m],["__file","modal-base.html.vue"]]);export{g as default};