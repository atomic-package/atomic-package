+++
title = "Switcher Component"
date = "2016-11-14"
+++

## Switcher

<ul class="switcher" data-ap-switcher="#switcherContents">
  <li><a href="">switcher001</a></li>
  <li>switcher002</li>
  <li><a href="">switcher003</a></li>
  <li>
    <div>switcher004</div>
    <a href=""></a>
    <p></p>
  </li>
</ul>
 
<ul class="switcher" data-ap-switcher>
  <li></li>
</ul>
 
<div class="switcherContents" id="switcherContents">
    <div>ああああああ</div>
    <div>いいいいいい</div>
    <div>ううううう</div>
    <div>えええええ</div>
</div>

<style>
.switcherContents > div {
    display: none;
}
.switcherContents > .show {
    display: block;
}
</style>

<br><br>


```html
<ul class="switcher" data-ap-switcher="#switcherContents">
  <li><a href="">switcher001</a></li>
  <li>switcher002</li>
  <li><a href="">switcher003</a></li>
  <li>
    <div>switcher004</div>
    <a href=""></a>
    <p></p>
  </li>
</ul>
 
<ul class="switcher" data-ap-switcher>
  <li></li>
</ul>
```

