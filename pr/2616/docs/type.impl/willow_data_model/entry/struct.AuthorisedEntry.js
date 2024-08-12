(function() {var type_impls = {
"iroh_willow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"impl\"><a href=\"#impl-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MCL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MCC: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MPL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, N, S, PD, AT&gt; AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;<div class=\"where\">where\n    N: NamespaceId,\n    S: SubspaceId,\n    PD: PayloadDigest,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    entry: Entry&lt;MCL, MCC, MPL, N, S, PD&gt;,\n    token: AT\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;, <a class=\"struct\" href=\"iroh_willow/proto/data_model/struct.UnauthorisedWriteError.html\" title=\"struct iroh_willow::proto::data_model::UnauthorisedWriteError\">UnauthorisedWriteError</a>&gt;<div class=\"where\">where\n    AT: AuthorisationToken&lt;MCL, MCC, MPL, N, S, PD&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Construct an [<code>AuthorisedEntry</code>] if the token permits the writing of this entry, otherwise return an <a href=\"iroh_willow/proto/data_model/struct.UnauthorisedWriteError.html\" title=\"struct iroh_willow::proto::data_model::UnauthorisedWriteError\"><code>UnauthorisedWriteError</code></a></p>\n</div></details></div></details>",0,"iroh_willow::proto::data_model::AuthorisedEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"impl\"><a href=\"#impl-Clone-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MCL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MCC: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MPL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, N, S, PD, AT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + NamespaceId,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + SubspaceId,\n    PD: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + PayloadDigest,\n    AT: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iroh_willow::proto::data_model::AuthorisedEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"impl\"><a href=\"#impl-Debug-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MCL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MCC: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MPL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, N, S, PD, AT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + NamespaceId,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + SubspaceId,\n    PD: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + PayloadDigest,\n    AT: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","iroh_willow::proto::data_model::AuthorisedEntry"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MCL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MCC: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MPL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, N, S, PD, AT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + NamespaceId,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + SubspaceId,\n    PD: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + PayloadDigest,\n    AT: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","iroh_willow::proto::data_model::AuthorisedEntry"],["<section id=\"impl-Eq-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"impl\"><a href=\"#impl-Eq-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MCL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MCC: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MPL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, N, S, PD, AT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;<div class=\"where\">where\n    N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + NamespaceId,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + SubspaceId,\n    PD: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + PayloadDigest,\n    AT: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","iroh_willow::proto::data_model::AuthorisedEntry"],["<section id=\"impl-StructuralPartialEq-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-AuthorisedEntry%3CMCL,+MCC,+MPL,+N,+S,+PD,+AT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MCL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MCC: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, const MPL: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, N, S, PD, AT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for AuthorisedEntry&lt;MCL, MCC, MPL, N, S, PD, AT&gt;<div class=\"where\">where\n    N: NamespaceId,\n    S: SubspaceId,\n    PD: PayloadDigest,</div></h3></section>","StructuralPartialEq","iroh_willow::proto::data_model::AuthorisedEntry"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()