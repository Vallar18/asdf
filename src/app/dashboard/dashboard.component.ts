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
  tests = [];

  constructor() {
  }

  ngOnInit(): void {
    this.tests = this.getTests();
    this.selectedTest = this.tests[0];
  }


  select(val: any): void {
    val.selected = true;
    this.selected = val;
    this.showError = false;
  }

  checkSelected(): void {
    if (!this.selected) {
      this.showError = true;
      return;
    }
    if (this.tests[this.selectedTest.id].type !== 'checkbox') {
      if (this.selected.selected && this.selected.isRight) {
        this.countRight = ++this.countRight;
      }
    }
    let right = 0;
    this.tests[this.selectedTest.id].items.map(item => {
      if (item.isRight) {
        item.success = true;
        if (item.selected) {
          right++;
        }
      } else if (item.selected) {
        item.error = true;
      }
    });
    if (right === 2) {
      this.countRight = ++this.countRight;
    }
    // } else {
    //   const el = this.tests[this.selectedTest.id];
    //   if (this.selected.isRight) {
    //     this.selected.success = true;
    //     this.countRight = ++this.countRight;
    //   } else {
    //     this.selected.error = true;
    //   }
    // }
    this.checked = true;
  }

  nextEv(): void {
    this.checked = false;
    this.selected = null;
    if (this.selectedTest.id === 11) {
      this.endTest = true;
      this.showTest = false;
    } else {
      let index = this.selectedTest.id;
      this.selectedTest = this.tests[++index];
    }
  }

  repeatTest(): void {
    this.countRight = 0;
    this.selected = null;
    this.showTest = true;
    this.tests = this.getTests();
    this.selectedTest = this.tests[0];
    this.endTest = false;
  }

  getTests(): any[] {
    return [
      {
        id: 0,
        title: `Серед зазначених рівнянь оберіть диференціальне.`,
        items: [
          {
            image: './assets/images/6-1.png',
            selected: null,
            error: null,
            success: null
          },
          {
            image: './assets/images/6-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/6-3.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/6-4.png',
            error: null,
            isRight: true,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 1,
        title: `Знайти загальний розв'язок диференціального рівняння.`,
        items: [
          {
            image: './assets/images/2-1.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/2-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/2-3.png',
            error: null,
            selected: null,
            isRight: true,
            success: null
          },
          {
            image: './assets/images/2-4.png',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 2,
        title: `Знайти загальний розв'язок диференціального рівняння.`,
        items: [
          {
            image: './assets/images/3-1.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/3-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/3-3.png',
            error: null,
            selected: null,
            isRight: true,
            success: null
          },
          {
            image: './assets/images/3-4.png',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 3,
        title: `Знайти загальний розв'язок диференціального рівняння.`,
        items: [
          {
            image: './assets/images/4-1.png',
            selected: null,
            error: null,
            success: null
          },
          {
            image: './assets/images/4-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/4-3.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/4-4.png',
            error: null,
            isRight: true,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 4,
        title: `Знайти загальний розв'язок диференціального рівняння.`,
        items: [
          {
            image: './assets/images/5-1.png',
            selected: null,
            error: null,
            success: null
          },
          {
            image: './assets/images/5-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/5-3.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/5-4.png',
            error: null,
            isRight: true,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 5,
        title: `Знайти загальний розв'язок диференціального рівняння.`,
        items: [
          {
            image: './assets/images/1-1.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/1-2.png',
            error: null,
            isRight: true,
            selected: null,
            success: null
          },
          {
            image: './assets/images/1-3.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/1-4.png',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 6,
        title: `Серед зазначених рівнянь оберіть диференціальне.`,
        items: [
          {
            image: './assets/images/7-1.png',
            selected: null,
            isRight: true,
            error: null,
            success: null
          },
          {
            image: './assets/images/7-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/7-3.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/7-4.png',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 7,
        title: `Серед зазначених рівнянь оберіть диференціальне.`,
        items: [
          {
            image: './assets/images/8-1.png',
            selected: null,
            error: null,
            success: null
          },
          {
            image: './assets/images/8-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/8-3.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/8-4.png',
            isRight: true,
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 8,
        title: `Серед зазначених рівнянь оберіть диференціальне.`,
        items: [
          {
            image: './assets/images/9-1.png',
            selected: null,
            isRight: true,
            error: null,
            success: null
          },
          {
            image: './assets/images/9-2.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/9-3.png',
            error: null,
            selected: null,
            success: null
          },
          {
            image: './assets/images/9-4.png',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 9,
        title: `Визначте порядок запропонованого диференційного рівняння`,
        image: './assets/images/10.png',
        items: [
          {
            alt: 'перший',
            error: null,
            selected: null,
            isRight: true,
            success: null
          },
          {
            alt: 'другий',
            error: null,
            selected: null,
            success: null
          },
          {
            alt: 'третій',
            error: null,
            selected: null,
            success: null
          },
          {
            alt: 'четвертий',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 10,
        title: `Визначте порядок запропонованого диференційного рівняння`,
        image: './assets/images/11.png',
        items: [
          {
            alt: 'перший',
            error: null,
            isRight: true,
            selected: null,
            success: null
          },
          {
            alt: 'другий',
            error: null,
            selected: null,
            success: null
          },
          {
            alt: 'третій',
            error: null,
            selected: null,
            success: null
          },
          {
            alt: 'четвертий',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
      {
        id: 11,
        title: `Визначте порядок запропонованого диференційного рівняння`,
        image: './assets/images/12.png',
        items: [
          {
            alt: 'перший',
            error: null,
            selected: null,
            success: null
          },
          {
            alt: 'другий',
            error: null,
            selected: null,
            isRight: true,
            success: null
          },
          {
            alt: 'третій',
            error: null,
            selected: null,
            success: null
          },
          {
            alt: 'четвертий',
            error: null,
            selected: null,
            success: null
          }
        ]
      },
    ];
  }
}
