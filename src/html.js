import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
  dangerouslySetInnerHTML={{
    __html: `



(function() {
  var Accordion = function(element) {
    this.element = element;
    this.items = Util.getChildrenByClassName(this.element, 'js-accordion__item');
    this.version = this.element.getAttribute('data-version') ? '-'+this.element.getAttribute('data-version') : '';
    this.showClass = 'accordion'+this.version+'__item--is-open';
    this.animateHeight = (this.element.getAttribute('data-animation') == 'on');
    this.multiItems = !(this.element.getAttribute('data-multi-items') == 'off'); 
    this.deepLinkOn = this.element.getAttribute('data-deep-link') == 'on';
    this.initAccordion();
  };

  Accordion.prototype.initAccordion = function() {

    for( var i = 0; i < this.items.length; i++) {
      var button = this.items[i].getElementsByTagName('button')[0],
        content = this.items[i].getElementsByClassName('js-accordion__panel')[0],
        isOpen = Util.hasClass(this.items[i], this.showClass) ? 'true' : 'false';
      Util.setAttributes(button, {'aria-expanded': isOpen, 'aria-controls': 'accordion-content-'+i, 'id': 'accordion-header-'+i});
      Util.addClass(button, 'js-accordion__trigger');
      Util.setAttributes(content, {'aria-labelledby': 'accordion-header-'+i, 'id': 'accordion-content-'+i});
    }


    this.initAccordionEvents();


    this.initDeepLink();
  };

  Accordion.prototype.initAccordionEvents = function() {
    var self = this;

    this.element.addEventListener('click', function(event) {
      var trigger = event.target.closest('.js-accordion__trigger');
      if( trigger && Util.getIndexInArray(self.items, trigger.parentElement) >= 0) self.triggerAccordion(trigger);
    });
  };

  Accordion.prototype.triggerAccordion = function(trigger) {
    var bool = (trigger.getAttribute('aria-expanded') === 'true');

    this.animateAccordion(trigger, bool, false);

    if(!bool && this.deepLinkOn) {
      history.replaceState(null, '', '#'+trigger.getAttribute('aria-controls'));
    }
  };

  Accordion.prototype.animateAccordion = function(trigger, bool, deepLink) {
    var self = this;
    var item = trigger.closest('.js-accordion__item'),
      content = item.getElementsByClassName('js-accordion__panel')[0],
      ariaValue = bool ? 'false' : 'true';

    if(!bool) Util.addClass(item, this.showClass);
    trigger.setAttribute('aria-expanded', ariaValue);
    self.resetContentVisibility(item, content, bool);

    if( !this.multiItems && !bool || deepLink) this.closeSiblings(item);
  };

  Accordion.prototype.resetContentVisibility = function(item, content, bool) {
    Util.toggleClass(item, this.showClass, !bool);
    content.removeAttribute("style");
    if(bool && !this.multiItems) {
      this.moveContent();
    }
  };

  Accordion.prototype.closeSiblings = function(item) {
    var index = Util.getIndexInArray(this.items, item);
    for( var i = 0; i < this.items.length; i++) {
      if(Util.hasClass(this.items[i], this.showClass) && i != index) {
        this.animateAccordion(this.items[i].getElementsByClassName('js-accordion__trigger')[0], true, false);
        return false;
      }
    }
  };

  Accordion.prototype.moveContent = function() { // make sure title of the accordion just opened is inside the viewport
    var openAccordion = this.element.getElementsByClassName(this.showClass);
    if(openAccordion.length == 0) return;
    var boundingRect = openAccordion[0].getBoundingClientRect();
    if(boundingRect.top < 0 || boundingRect.top > window.innerHeight) {
      var windowScrollTop = window.scrollY || document.documentElement.scrollTop;
      window.scrollTo(0, boundingRect.top + windowScrollTop);
    }
  };

  Accordion.prototype.initDeepLink = function() {
    if(!this.deepLinkOn) return;
    var hash = window.location.hash.substr(1);
    if(!hash || hash == '') return; 
    var trigger = this.element.querySelector('.js-accordion__trigger[aria-controls="'+hash+'"]');
    if(trigger && trigger.getAttribute('aria-expanded') !== 'true') {
      this.animateAccordion(trigger, false, true);
      setTimeout(function(){trigger.scrollIntoView(true);});
    }
  };

  window.Accordion = Accordion;

  var accordions = document.getElementsByClassName('js-accordion');
  if( accordions.length > 0 ) {
    for( var i = 0; i < accordions.length; i++) {
      (function(i){new Accordion(accordions[i]);})(i);
    }
  }
}());
`
  }}
/>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
