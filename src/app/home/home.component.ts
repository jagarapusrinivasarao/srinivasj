import { Component, OnInit } from '@angular/core';
import { IImage } from '../slideshow/IImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    { url: 'assets/ui-developer-slider.jpg', caption: 'UX/UI Developer', href: '#config' },
    { url: 'assets/about.jpg', caption: 'About Us', href: '#about'},
    { url: 'assets/web-slider.jpg', caption: 'Web Design', href: '#web' },
    { url: 'assets/digital-slider.jpg', caption: 'Digital Marketing', href: '#digital' },
    { url: 'assets/contact.jpg', caption: 'Contact Us', href: '#contact'  }
  ];
  height: string = '400px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;

  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      console.log('adding an image url dynamically.');
      // this.imageUrls.push('https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg');
    }, 2000);

  }
}
