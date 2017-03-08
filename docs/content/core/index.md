+++
title = "Core Component"
date = "2016-11-14"
+++

## Core Components

こちらのページでは、Atomic-Packageのすべてのコアコンポーネントを一目で確認することができます。

Atomic-Packageには、30以上のAtomic型UIPartsと拡張可能コンポーネントがあり、それらを組み合わせることができます。


### Size Variation Class

Atomic-PackageのAtomic型UIPartsは、それぞれのパーツに対してサイズを自由に変更することが容易に行うことができます。

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

### Color Variation Class

Atomic-PackageのAtomic型UIPartsは、それぞれのカラーに変更することが容易に行うことができます。

APB CSSの特性により、skin classとSemantic Classは同等の見た目となります。

<table class="table">
  <caption>Atomic Parts Color</caption>
  <thead>
      <tr>
        <th>Skin Class</th>
        <th>Semantic Class</th>
        <th>Details</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>default</td>
      <td>デフォルトカラー</td>
    </tr>
    <tr>
      <td>primary</td>
      <td>primary</td>
      <td>プライマリーカラー</td>
    </tr>
    <tr>
      <td>green</td>
      <td>success</td>
      <td>グリーンカラー</td>
    </tr>
    <tr>
      <td>blue</td>
      <td>info</td>
      <td>ブルーカラー</td>
    </tr>
    <tr>
      <td>orange</td>
      <td>warning</td>
      <td>オレンジカラー</td>
    </tr>
    <tr>
      <td>red</td>
      <td>danger</td>
      <td>レッドカラー</td>
    </tr>
  </tbody>
</table>



### Breakpoints

Atomic-Packageでは、レスポンシブ対応としてStyle切り替えのBreakpointを設けております。

各Breakpointは以下の通りとなります。



### CSS architecture

Atomic-PackageのCSSアーキテクチャには、Atomic Designをベースとした「APBCSS (Atomic Parts Base CSS)」を採用しております。
よって、それぞれのAtomic型UIPartsには、デフォルトでは margin などによるレイアウトスタイルが適応されていない状態となります。


