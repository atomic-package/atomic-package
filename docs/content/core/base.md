+++
title = "Base Component"
date = "2016-11-14"
+++

## Base

### Parts Size CSS Class

<div>
<table class="table">
  <caption>Atomic Parts Size</caption>
  <thead>
      <tr>
        <th>Width x Height</th>
        <th>Width</th>
        <th>Height</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>mini</td>
      <td>narrow</td>
      <td>lower</td>
    </tr>
    <tr>
      <td>small</td>
      <td>short</td>
      <td>low</td>
    </tr>
    <tr>
      <td>medium or default</td>
      <td>medium or default</td>
      <td>medium or default</td>
    </tr>
    <tr>
      <td>large</td>
      <td>long</td>
      <td>high</td>
    </tr>
    <tr>
      <td>big</td>
      <td>wide</td>
      <td>lofty</td>
    </tr>
    <tr>
      <td>free</td>
      <td>free</td>
      <td>free</td>
    </tr>
  </tbody>
</table>
</div>

### Parts Color CSS Class
<div>
<table class="table">
  <caption>Atomic Parts Color</caption>
  <thead>
      <tr>
        <th>Skin Name</th>
        <th>Semantic Name</th>
        <th>Details</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>default</td>
      <td>通常のカラー。付与クラスなし</td>
    </tr>
    <tr>
      <td>primary</td>
      <td>primary</td>
      <td>メインカラークラス</td>
    </tr>
    <tr>
      <td>green</td>
      <td>success</td>
      <td>グリーンカラークラス。成功の表現</td>
    </tr>
    <tr>
      <td>blue</td>
      <td>info</td>
      <td>ブルーカラークラス。</td>
    </tr>
    <tr>
      <td>orange</td>
      <td>warnig</td>
      <td>オレンジカラークラス。</td>
    </tr>
    <tr>
      <td>red</td>
      <td>error</td>
      <td>レッドカラークラス。</td>
    </tr>
  </tbody>
</table>
</div>



### Ruled Line
罫線を表す `hr` 要素には、デフォルトのスタイルが定義されています。

<h3 class="title article sub">Example</h3>
<div class="box article example">
  <hr>
</div>


<h3 class="title article sub">Markup</h3>
```
<hr>
```

#### Double

<h3 class="title article sub">Example</h3>
<div class="box article example">
  <hr class="double">
</div>

<h3 class="title article sub">Markup</h3>
```
<hr class="double">
```

#### Dotted

<h3 class="title article sub">Example</h3>
<div class="box article example">
  <hr class="dotted">
</div>

<h3 class="title article sub">Markup</h3>
```
<hr class="dotted">
```

#### dashed
<h3 class="title article sub">Example</h3>
<div class="box article example">
  <hr class="dashed">
</div>

<h3 class="title article sub">Markup</h3>
```
<hr class="dashed">
```

#### Size Variation

**large**
<hr class="large">
<br>
<hr class="large dotted">
<br>
<hr class="large double">
<br>
<hr class="large dashed">


**big**
<hr class="big">
<br>
<hr class="big dotted">
<br>
<hr class="big double">
<br>
<hr class="big dashed">

<br><br>

#### Color Variation

<hr>
<br>
<hr class="double">
<br>
<hr class="dotted">
<br>
<hr class="dashed">

<br><br>

<hr class="primary">
<br>
<hr class="primary double">
<br>
<hr class="primary dotted">
<br>
<hr class="primary dashed">

<br>

<hr class="green">
<br>
<hr class="green double">
<br>
<hr class="green dotted">
<br>
<hr class="green dashed">

<hr class="blue">
<br>
<hr class="blue double">
<br>
<hr class="blue dotted">
<br>
<hr class="blue dashed">

<br><br>

<hr class="orange">
<br>
<hr class="orange double">
<br>
<hr class="orange dotted">
<br>
<hr class="orange dashed">

<br><br>

<hr class="red">
<br>
<hr class="red double">
<br>
<hr class="red dotted">
<br>
<hr class="red dashed">


#### Other Elements

Atomic-Packageでは、 hr以外の要素でも罫線を表現することが可能です。

その際は、要素に `hr` classを付与する事によって、罫線の振る舞いをさせることができます。

<p class="hr"></p>

```
<p class="hr"></p>
```

### Inline Elements

<p class="text">テキストテキストテキストテキストテキストテキストテキスト</p>

<p class="text strong">Strong is used to indicate strong importance</p>

<p class="text strong">Strong is used to <strong>indicate strong importance</strong></p>

<p class="text">The <u>u element</u> is text with an unarticulated, though explicitly rendered, non-textual annotation</p>

<p class="text link"></p>

<p class="text">The <i>i element</i> is text that is set off from the normal text</p>

The u element is text with an unarticulated, though explicitly rendered, non-textual annotation

This text is deleted and  

This text has a strikethrough

Superscript®

Subscript for things like H2O

This small text is small for for fine print, etc.

Abbreviation: HTML

Keybord input: Cmd

“This text is a short inline quotation”

This is a citation

The dfn element indicates a definition.

This is what inline code looks like.

This is sample output from a computer program

The variarble element, such as x = y


### Paragraph

Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet quam et libero dictum, vitae dignissim leo eleifend. In in turpis turpis. Quisque justo turpis, vestibulum non enim nec, tempor mollis mi. Sed vel tristique quam.


### Time Element

time

### List Element 
list




