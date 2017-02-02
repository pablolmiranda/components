m = angular.module "lens.atoms.colors", []


m.controller "ColorsController", (
  $scope
) ->
  return this


m.directive "colors", ->
  controller: "ColorsController"
  restrict: "E"
  scope: {}
  template: template


template = """
<section id="brand-colors">
  <h2 id="Brand" class="m-b-1-xs">Brand Colors</h2>
  <p class="m-b-2-xs">There are only 2 main brand colors for Treehouse. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.brand-bg-[color]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.brand-color-[color]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.brand-border-[color]</code></td>
        <td><code>border-color</code></td>
      </tr>
      <tr>
        <td><code>.brand-fill-[color]</code></td>
        <td><code>fill</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
      <tr>
        <td><code>.brand-stroke-[color]</code></td>
        <td><code>stroke</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-brand overflow-hidden-xs m-b-4-xs"></ul><!-- List items built by JS -->
</section>


<section id="ui-colors">
  <h2 id="UI" class="m-b-1-xs">UI Colors</h2>
  <p class="m-b-2-xs">Treehouse utilizes colors in various parts of our app UI. Most of our app is gray, so color is rather important. Each of the UI colors has utility classes you can use to apply the color to different parts of an element. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.bg-[color]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.color-[color]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.border-[color]</code></td>
        <td><code>border-color</code></td>
      </tr>
      <tr>
        <td><code>.fill-[color]</code></td>
        <td><code>fill</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
      <tr>
        <td><code>.stroke-[color]</code></td>
        <td><code>stroke</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-ui overflow-hidden-xs m-b-4-xs"></ul><!-- List items built by JS -->
</section>



<section id="gray-colors">
  <h2 id="Gray" class="m-b-1-xs">Gray Colors</h2>
  <p class="m-b-2-xs">Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.bg-[color]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.color-[color]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.border-[color]</code></td>
        <td><code>border-color</code></td>
      </tr>
      <tr>
        <td><code>.fill-[color]</code></td>
        <td><code>fill</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
      <tr>
        <td><code>.stroke-[color]</code></td>
        <td><code>stroke</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-gray overflow-hidden-xs m-b-4-xs"></ul><!-- List items built by JS -->
</section>



<section id="text-colors">
  <h2 id="Text" class="m-b-1-xs">Text Colors</h2>
  <p class="m-b-2-xs">Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.text-bg-[color]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.text-color-[color]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.text-border-[color]</code></td>
        <td><code>border-color</code></td>
      </tr>
      <tr>
        <td><code>.text-fill-[color]</code></td>
        <td><code>fill</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
      <tr>
        <td><code>.text-stroke-[color]</code></td>
        <td><code>stroke</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-text overflow-hidden-xs m-b-4-xs"></ul><!-- List items built by JS -->
</section>



<section id="topic-colors">
  <h2 id="Topics" class="m-b-1-xs">Topic Colors</h2>
  <p class="m-b-2-xs">Lens contains utility classes for all variations of topic colors within Treehouse. These colors are used to denote the topic of courses and for various UI associated with a course. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>
  <table class="table-border-rows col-60-xl m-b-3-xs">
    <thead>
      <th>Class</th>
      <th>Property</th>
    </thead>
    <tbody>
      <tr>
        <td><code>.topic-bg-[color]-[value]</code></td>
        <td><code>background-color</code></td>
      </tr>
      <tr>
        <td><code>.topic-color-[color]-[value]</code></td>
        <td><code>color</code></td>
      </tr>
      <tr>
        <td><code>.topic-border-[color]-[value]</code></td>
        <td><code>border-color</code></td>
      </tr>
      <tr>
        <td><code>.topic-fill-[color]-[value]</code></td>
        <td><code>fill</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
      <tr>
        <td><code>.topic-stroke-[color]-[value]</code></td>
        <td><code>stroke</code> <em class="text-6-xs">(Used for SVGs)</em></td>
      </tr>
    </tbody>
  </table>

  <ul class="list-unstyled guide-color guide-colors-topic overflow-hidden-xs"></ul><!-- List items built by JS -->
</section>


<!-- Sass to JS goodness -->
<div id="brandColorData"></div>
<div id="uiColorData"></div>
<div id="grayColorData"></div>
<div id="textColorData"></div>
<div id="topicColorData"></div>

<script src="js/prism.js"></script>
<script src="js/sass-to-js.js"></script>
<script src="js/sass-to-js-custom-functions.js"></script>
"""
