<template><div><h1 id="leaderboard" tabindex="-1"><a class="header-anchor" href="#leaderboard" aria-hidden="true">#</a> LeaderBoard</h1>
<p>Displays the top performing portfolios</p>
<Demo componentName="examples-leader-board-doc" />
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// </span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LeaderBoard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@magnito/crypttops-library'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>LeaderBoard
            <span class="token operator">:</span>pairs<span class="token operator">=</span><span class="token string">"pairs"</span>
            <span class="token operator">:</span>data<span class="token operator">=</span><span class="token string">"data"</span>
        <span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source Code</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>export default {
    name: 'LeaderBoard',
    props: {'pairs': Array, 'data': Array},
    components: {

    },
    setup() {
        
    },

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>
<p><code v-pre>data</code> : An array of Dictionaries containing information to be rendered in the following format</p>
<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Format of data array</span>
<span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John Mitchel D.'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pairs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1.234</span><span class="token punctuation">,</span> <span class="token number">3.245</span><span class="token punctuation">,</span> <span class="token number">2.650</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.34743</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Liam'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pairs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1.234</span><span class="token punctuation">,</span> <span class="token number">3.245</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2.650</span><span class="token punctuation">,</span> <span class="token number">0.34743</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Tony Starks'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pairs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10.234</span><span class="token punctuation">,</span> <span class="token number">30.245</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">15.650</span><span class="token punctuation">,</span> <span class="token number">34.743</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>pairs</code> : The names of crypto pairs to be displayed</p>
<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Format of pairs array</span>
<span class="token punctuation">[</span><span class="token string">'ETHUSD'</span><span class="token punctuation">,</span><span class="token string">'BTCUSD'</span><span class="token punctuation">,</span> <span class="token string">'XRPUSD'</span><span class="token punctuation">,</span> <span class="token string">'EOSUSD'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
