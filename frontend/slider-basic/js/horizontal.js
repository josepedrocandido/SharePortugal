jQuery(function($) {
    'use strict';

    // -------------------------------------------------------------
    //   Basic Navigation - Horizontal Roll
    // -------------------------------------------------------------
    (function() {

        var $frame = $('#basic');
        var $slidee = $frame.children('ul').eq(0);
        var $wrap = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: true, // Switch to horizontal mode.

            // Item based navigation
            itemNav: 'basic', // Item navigation type. Can be: 'basic', 'centered', 'forceCentered'.
            smart: true, // Repositions the activated item to help with further navigation.
            activateOn: 'click', // Activate an item on this event. Can be: 'click', 'mouseenter'

            // Dragging
            mouseDragging: true, // Enable navigation by dragging the SLIDEE with mouse cursor.
            touchDragging: true, // Enable navigation by dragging the SLIDEE with touch events.
            releaseSwing: true, // Ease out on dragging swing release.
            elasticBounds: true, // Stretch SLIDEE position limits when dragging past FRAME boundaries.

            // Mixed options
            startAt: 0, // Starting offset in pixels or items.

            // Scrollbar
            scrollBar: $wrap.find('.sly_scrollbar'), // Selector or DOM element for scrollbar container.
            dragHandle: true, // Whether the scrollbar handle should be draggable.
            dynamicHandle: true, // Scrollbar handle represents the ratio between hidden and visible content.
            clickBar: true, // Enable navigation by clicking on scrollbar.

            // Scrolling
            scrollBy: 1, // Pixels or items to move per one mouse scroll. 0 to disable scrolling.

            // Mixed options
            speed: 8000000000000000000 // Animations speed in milliseconds. 0 to disable animations.
        });
    }());
});

// -------------------------------------------------------------
//   Day to Night Changer
// -------------------------------------------------------------

$(document).ready(function() {

    $('.frame').toggleClass('day-background');

    $('#cb1').on('click', function() {
        $('.frame').toggleClass('day-background');
        $("#buildings").attr("src", "./images/buildings2.png");

    });


});