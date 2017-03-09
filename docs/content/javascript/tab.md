+++
title = "Tab Component"
date = "2016-11-14"
+++

## Tab

<nav class="tab">
  <ul class="tabList" data-ap-tab>
    <li>
      <a href="">Home</a>
    </li>
    <li class="active">
      <a href="">Pages</a>
    </li>
    <li>
      <a href="">Pages</a>
    </li>
    <li class="disable">
      <a href="">disable</a>
    </li>
  </ul>
</nav>

<br><br>

```html
<nav class="tab">
  <ul class="tabList" data-ap-tab>
    <li>
      <a href="">Home</a>
    </li>
    <li class="active">
      <a href="">Pages</a>
    </li>
    <li>
      <a href="">Pages</a>
    </li>
    <li class="disable">
      <a href="">disable</a>
    </li>
  </ul>
</nav>
```

```html
<ul class="tabList" data-ap-tab>
```

<nav class="tab">
  <ul class="tabList" data-ap-tab="#tabContents">
    <li>
      <a href="">Home</a>
    </li>
    <li class="active">
      <a href="">Pages</a>
    </li>
    <li>
      <a href="">Pages</a>
    </li>
    <li class="disable">
      <a href="">disable</a>
    </li>
  </ul>
</nav>

<div class="tabContents" id="tabContents">
  <div>タブコンテンツ1</div>
  <div>タブコンテンツ2</div>
  <div>タブコンテンツ3</div>
  <div>タブコンテンツ4</div>
</div>

