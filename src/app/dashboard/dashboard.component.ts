import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showTest = false;
  endTest = false;
  selected: any = null;
  showError = false;

  selectedTest: any;

  checked: any;
  countRight = 0;

  tests = [
    {
      id: 0,
      title: 'Серед наведених виразів оберіть неправильний.',
      items: [
        {
          image: './assets/images/1-1.png'
        },
        {
          image: './assets/images/1-2.png',
        },
        {
          image: './assets/images/1-3.png',
        },
        {
          image: './assets/images/1-4.png',
          isRight: true
        }
      ]
    },
    {
      id: 1,
      title: 'Серед наведених виразів оберіть неправильний.',
      items: [
        {
          image: './assets/images/1-1.png',
          isRight: true
        },
        {
          image: './assets/images/1-2.png',
        },
        {
          image: './assets/images/1-3.png',
        },
        {
          image: './assets/images/1-4.png',
        }
      ]
    },
    {
      id: 2,
      title: 'Серед наведених виразів оберіть неправильний.',
      items: [
        {
          image: './assets/images/1-1.png',
          isRight: true
        },
        {
          image: './assets/images/1-2.png',
        },
        {
          image: './assets/images/1-3.png',
        },
        {
          image: './assets/images/1-4.png',
        }
      ]
    },
    {
      id: 3,
      title: 'Серед наведених виразів оберіть неправильний.',
      items: [
        {
          image: './assets/images/1-1.png',
          isRight: true
        },
        {
          image: './assets/images/1-2.png',
        },
        {
          image: './assets/images/1-3.png',
        },
        {
          image: './assets/images/1-4.png',
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.selectedTest = this.tests[0];
  }


  select(val: any): void {
    this.selected = val;
    this.showError = false;
  }

  checkSelected(): void {
    if (!this.selected) {
      this.showError = true;
      return;
    }
    if (this.selected.isRight) {
      this.selected.success = true;
      this.countRight = ++this.countRight;
    } else {
      this.selected.error = true;
    }
    this.checked = true;
  }

  nextEv(): void {
    this.checked = false;
    this.selected = null;
    if (this.selectedTest.id === 3) {
      this.endTest = true;
      this.showTest = false;
    } else {
      this.selectedTest = this.tests[++this.selectedTest.id];
    }
  }

  repeatTest(): void {
    this.countRight = 0;
    this.selected = null;
    this.showTest = true;
    this.selectedTest = this.tests[0];
    this.endTest = false;
  }
}
