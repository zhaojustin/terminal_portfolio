var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 200 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  //---TYPED JS-------------

  var typed = new Typed('.typed', {
    stringsElement: '#typed-intro',
    showCursor: true,
    typeSpeed: 0
  });

  //---TERMINAL-------------

  $(function() {
    $('#terminal').terminal({
        home: function() {
          this.clear();
          typed.destroy();
            typed = new Typed('.typed', {
              stringsElement: '#typed-intro',
              showCursor: true,
              typeSpeed: 0
            });
        },
        help: function() {
          this.clear();
          typed.destroy();
            $("#typed-helpmenu").css("display", "block");
            typed = new Typed('.typed', {
                stringsElement: '#typed-helpmenu',
                showCursor: true,
                typeSpeed: 0
            });
        },
        resume: function() {
          this.clear();
          typed.destroy();
            window.open('assets/resume.pdf', '_blank');
            typed = new Typed('.typed', {
              stringsElement: '#typed-helpmenu',
              showCursor: true,
              typeSpeed: 0
            });
        },
        scioly: function() {
          this.clear();
          typed.destroy();
          typed = new Typed('.typed', {
            stringsElement: '#typed-scioly',
            showCursor: true,
            typeSpeed: 0
          });
        },
        fbla: function() {
          this.clear();
          typed.destroy();
          typed = new Typed('.typed', {
            stringsElement: '#typed-fbla',
            showCursor: true,
            typeSpeed: 0
          });
        },
        pokemon: function() {
          this.clear();
          typed.destroy();
          typed = new Typed('.typed', {
            stringsElement: '#typed-pokemon',
            showCursor: true,
            typeSpeed: 0
          });
        },
        boba: function() {
          this.clear();
          typed.destroy();
          typed = new Typed('.typed', {
            stringsElement: '#typed-boba',
            showCursor: true,
            typeSpeed: 0
          });
        },
        contact: function() {
          this.clear();
          typed.destroy();
          typed = new Typed('.typed', {
            stringsElement: '#typed-contact',
            showCursor: true,
            typeSpeed: 0
          });
        }
    },
    {
        greetings: ""
    });
});