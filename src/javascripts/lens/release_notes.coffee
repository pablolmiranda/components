m = angular.module "lens.release_notes", []


m.controller "ReleaseNotesController", (
  $scope
) ->
  return this


m.directive "releaseNotes", ->
  controller: "ReleaseNotesController"
  restrict: "E"
  scope: {}
  template: template


template = """
<section id="index">
  <div class="col-container border-b-xs p-b-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.1.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Initial beta release</p>
      <p class="text-6-xs text-color-light">August 18, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Lens has been released as a Beta with initial atomic utility classes.</li>
        <li>Lens is now a Bower package and can be installed via Bower.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.2.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Initial feedback release</p>
      <p class="text-6-xs text-color-light">September 6, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Added in a <code>.text-color-white</code> class.</li>
        <li>Made sure <code>.col-max</code> had <code>margin: 0 auto</code>.</li>
        <li>Added <code>!important to grid classes.</code></li>
        <li>Added outer padding to <code>.col-max</code> and changed grid width to 1260px to match Treehouse.</li>
        <li>Added <code>!important</code> to header font sizes.</li>
        <li>Added in a larger header text class (<code>.text-0-xs</code>) for use in marketing hero units.</li>
        <li>Refactored inverse button styles.</li>
        <li>Removed <code>!important</code> form <code>.col-gutters</code> styles.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.3.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Secondary feedback release</p>
      <p class="text-6-xs text-color-light">September 8, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Added <code>!important</code> to primary button class.</li>
        <li>Made form select styles <code>!important</code>.</li>
        <li>Made <code>.col-33-n</code> use 33.3% to round more evenly.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.4.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Quick button update</p>
      <p class="text-6-xs text-color-light">September 13, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Hotfix buttons that were being messed up with existing Treehouse styles.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.5.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Select height update</p>
      <p class="text-6-xs text-color-light">September 22, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Change padding on <code>select</code> form elements to match input height.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.5.1</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Select height update for Safari</p>
      <p class="text-6-xs text-color-light">September 22, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Change padding on <code>select</code> form elements to match input height in Safari.</li>
        <li>Changed line-height on <code>select</code> elements to 1.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.5.2</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Select height update for Firefox</p>
      <p class="text-6-xs text-color-light">September 22, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Change padding on <code>select</code> form elements to match input height in Firefix.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.6.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Inline button style</p>
      <p class="text-6-xs text-color-light">September 28, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Added <code>.button--inline</code> to the buttons to make button match from height when they live inline next to text inputs.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.7.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Form updates</p>
      <p class="text-6-xs text-color-light">October 31, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Changed padding on <code>select</code> elements so they match text inputs.</li>
        <li>Changed column padding with new <code>.col-form</code> class that can be chained next to <code>.col-container</code> to change padding within columns to <code>6px</code>.</li>
        <li>Changed <code>padding-right</code> for firefox select inputs.</li>
      </ul>
    </div>
  </div>

  <div class="col-container border-b-xs p-b-2-xs m-t-2-xs">
    <div class="col col-10-md">
      <p class="text-color-light">0.8.0</p>
    </div>
    <div class="col col-90-md">
      <p class="bold">Radio updates</p>
      <p class="text-6-xs text-color-light">October 31, 2016</p>
      <ul class="m-t-1-xs text-6-xs">
        <li>Changed color of active/inactive radio labels.</li>
        <li>Added a style change for when text inputs are used as a radio choice.</li>
      </ul>
    </div>
  </div>
</section>
"""
