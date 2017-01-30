+++
title = "Form Component"
date = "2016-11-14"
+++

## Form Components

### Input Element

default

<input type="text" value="default input">
<input type="text" value="default input" disabled>

password

<input type="password" value="input type password">
<input type="password" value="input type password" disabled>


search

<input type="search" value="input type search">
<input type="search" value="input type search" disabled>


### Input WrapElement

default

<p class="input"><input type="text" value="default input"></p>
<p class="input disabled"><input type="text" value="default input"></p>

password

<p class="input password"><input type="text" value="input type password"></p>
<p class="input password disabled"><input type="text" value="input type password"></p>

search

<p class="input search"><input type="text" value="input type search"></p>
<p class="input search disabled"><input type="text" value="input type search"></p>

### Input Size Variation

#### Width

narrow
<p class="input narrow"><input type="text" value="12:00"></p>

short
<p class="input short"><input type="text" value="short text"></p>

default
<p class="input"><input type="text" value="default text value"></p>

long
<p class="input long"><input type="text" value="long size input"></p>

wide
<p class="input wide"><input type="text" value="wide size input"></p>

free
<p class="input free"><input type="text" value="free size input"></p>

#### Height
lower
<p class="input lower"><input type="text" value="テキスト"></p>

low
<p class="input low"><input type="text" value="テキスト"></p>

default
<p class="input"><input type="text" value="テキスト"></p>

high
<p class="input high"><input type="text" value="テキスト"></p>

lofty
<p class="input lofty"><input type="text" value="テキスト"></p>

#### Width x Height
mini
<p class="input mini"><input type="text" value="テキスト"></p>

small
<p class="input small"><input type="text" value="テキスト"></p>

default
<p class="input"><input type="text" value="テキスト"></p>

large
<p class="input large"><input type="text" value="テキスト"></p>

big
<p class="input big"><input type="text" value="テキスト"></p>

free
<p class="input free"><input type="text" value="テキスト"></p>

### Input Validation Status

Input warning
<p class="input orange"><input type="text" value="default text value"></p>
<input class="orange" type="text" value="default input">

Input error
<p class="input red"><input type="text" value="default text value"></p>
<input class="red" type="text" value="default input">

Input success
<p class="input green"><input type="text" value="default text value"></p>
<input class="green" type="text" value="default input">


### Input Color Variation

Input warning
<p class="input orange"><input type="text" value="default text value"></p>
<input class="orange" type="text" value="default input">

Input error
<p class="input red"><input type="text" value="default text value"></p>
<input class="red" type="text" value="default input">

Input success
<p class="input green"><input type="text" value="default text value"></p>
<input class="green" type="text" value="default input">


### Radio Button Element

<input type="radio">
<input type="radio" checked>
<input type="radio" disabled checked>

### Radio Color Variation

<input type="radio" name="radio1">
<input type="radio" name="radio1" checked>
<input type="radio" disabled checked>

<input type="radio" class="primary" name="radio2">
<input type="radio" class="primary" name="radio2" checked>
<input type="radio" class="primary" disabled checked>

<input type="radio" class="blue" name="radio3">
<input type="radio" class="blue" name="radio3" checked>
<input type="radio" class="blue" disabled checked>

<input type="radio" class="green" name="radio4">
<input type="radio" class="green" name="radio4" checked>
<input type="radio" class="green" disabled checked>

<input type="radio" class="orange" name="radio5">
<input type="radio" class="orange" name="radio5" checked>
<input type="radio" class="orange" disabled checked>

<input type="radio" class="red" name="radio6">
<input type="radio" class="red" name="radio6" checked>
<input type="radio" class="red" disabled checked>

### Radio Size Variation

<input type="radio" name="radio-size" class="primary mini">
<input type="radio" name="radio-size" class="primary small">
<input type="radio" name="radio-size" class="primary" checked>
<input type="radio" name="radio-size" class="primary large">
<input type="radio" name="radio-size" class="primary big">

### CheckBox Element

<input type="checkbox">
<input type="checkbox" checked>
<input type="checkbox" disabled checked>

### CheckBox Color Variation

<input type="checkbox">
<input type="checkbox" checked>
<input type="checkbox" disabled checked>

<input class="primary" type="checkbox">
<input class="primary" type="checkbox" checked>
<input class="primary" type="checkbox" disabled checked>

<input class="blue" type="checkbox">
<input class="blue" type="checkbox" checked>
<input class="blue" type="checkbox" disabled checked>

<input class="green" type="checkbox">
<input class="green" type="checkbox" checked>
<input class="green" type="checkbox" disabled checked>

<input class="orange" type="checkbox">
<input class="orange" type="checkbox" checked>
<input class="orange" type="checkbox" disabled checked>

<input class="red" type="checkbox">
<input class="red" type="checkbox" checked>
<input class="red" type="checkbox" disabled checked>
<br/>
<br/>

### CheckBox Size Variation

<input class="primary mini" type="checkbox">
<input class="primary small" type="checkbox">
<input class="primary" type="checkbox">
<input class="primary large" type="checkbox">
<input class="primary big" type="checkbox">

<br/>
<br/>

<p class="input mini"><input type="checkbox"></p>
<p class="input small"><input type="checkbox"></p>
<p class="input"><input type="checkbox"></p>
<p class="input large"><input type="checkbox"></p>
<p class="input big"><input type="checkbox"></p>

<input type="text" value="テキスト"/>
<input type="checkbox"/>
<input type="search"/>
<input type="radio"/>

### Select Element

<select name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

### Select WrapElement
    
<p class="input">
    <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
    </select>
</p>

### Select Size Variation

#### Width
narrow

<select class="narrow" name="" id="">
    <option value="">10</option>
    <option value="">20</option>
    <option value="">30</option>
    <option value="">40</option>
    <option value="">50</option>
</select>

short

<select class="short" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

default

<select name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

long

<select class="long" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

wide

<select class="wide" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

free

<select class="free" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

<p class="input">
    <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
    </select>
</p>

<p class="input">
    <select name="" id="">
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
    </select>
</p>

#### Height
lower

<select class="lower" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

low

<select class="low" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

default

<select name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

high

<select class="high" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

lofty

<select class="lofty" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>




#### Width x Height

mini

<select class="mini" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

small

<select class="small" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

default

<select name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

large

<select class="large" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

big

<select class="big" name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

free

<select name="" id="">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>

### Select Color Variation




### Layout Variation
<p class="input"><input type="text" value="テキスト"></p>
<p class="input"><input type="checkbox"></p>
<p class="input"><input type="search"></p>
<p class="input"><input type="radio"></p>
<p class="input"><input type="radio" checked></p>
<p class="input"><input type="radio" disabled checked></p>

