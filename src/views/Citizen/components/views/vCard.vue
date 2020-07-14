<template>
    <div class="example-2 card">
        <div class="wrapper">
        <div class="header">
            <div class="date">
            <span class="day">12</span>
            <span class="month">Aug</span>
            <span class="year">2016</span>
            </div>
            <ul class="menu-content">
            <li><a href="#" > <font-awesome-icon :icon="['far', 'bookmark']"/> </a></li>
            <li><a href="#" > <font-awesome-icon :icon="['far', 'heart']"/> <span>18</span></a></li>
            <li><a href="#" > <font-awesome-icon :icon="['far', 'comment']"/> <span>3</span></a></li>
            </ul>
        </div>
        <div class="data">
            <div class="content">
            <span class="author">Jane Doe</span>
            <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
            <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
            <a href="#" class="button">Read more</a>
            </div>
        </div>
        </div>
  </div>
</template>

<style lang="scss" scoped>
// @import url(https://fonts.googleapis.com/css?family=Open+Sans:300, 400, 700);
// Variables
$regal-blue: #034378;
$san-juan: #2d4e68;
$bermuda: #77d7b9;
$white: #fff;
$black: #000;
$open-sans: "Open Sans", sans-serif;
@mixin cf {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
}

// Base styles
.card {
  // float: left;
  padding: 0 0.7rem;
  // width: 50%;
  .menu-content {
    @include cf;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      display: inline-block;
    }
    a {
      color: $white;
    }
    span {
      position: absolute;
      left: 48%;
      top: 0;
      font-size: 10px;
      font-weight: 700;
      font-family: "Open Sans";
      transform: translate(-50%, 0);
    }
  }
  .wrapper {
    background-color: $white;
    min-height: 400px;
    width: 100%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
    &:hover {
      .data {
        transform: translateY(0);
      }
    }
  }
  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: translateY(calc(70px + 1em));
    transition: transform 0.3s;
    .content {
      padding: 1em;
      position: relative;
      z-index: 1;
    }
  }
  .author {
    font-size: 12px;
  }
  .title {
    margin-top: 10px;
  }
  .text {
    height: 70px;
    margin: 0;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + .menu-content {
    transform: translateY(-60px);
  }
}


// Second example styles
.example-2 {
  .wrapper {
    background: url(https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg) center / cover no-repeat;
    &:hover {
      .menu-content {
        span {
          transform: translate(-50%, -10px);
          opacity: 1;
        }
      }
    }
  }
  .header {
    @include cf;
    color: $white;
    padding: 1em;
    .date {
      float: left;
      font-size: 12px;
    }
  }
  .menu-content {
    float: right;
    li {
      margin: 0 5px;
      position: relative;
    }
    span {
      transition: all 0.3s;
      opacity: 0;
    }
  }
  .data {
    color: $white;
    transform: translateY(calc(70px + 4em));
  }
  .title {
    a {
      color: $white;
    }
  }
  .button {
    display: block;
    width: 100px;
    margin: 2em auto 1em;
    text-align: center;
    font-size: 12px;
    color: $white;
    line-height: 1;
    position: relative;
    font-weight: 700;
    &::after {
      content: '\2192';
      opacity: 0;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      transition: all 0.3s;
    }
    &:hover {
      &::after {
        transform: translate(5px, -50%);
        opacity: 1;
      }
    }
  }
}
</style>
