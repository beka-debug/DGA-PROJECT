import { Component } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent {
  text1 = '';
  text2 = '';
  differences = '';

  compareText() {
    const diff = this.findTextDifferences(this.text1, this.text2);
    this.differences = diff;
  }

  findTextDifferences(text1: string, text2: string): string {
    const diff = [];
    const maxLength = Math.max(text1.length, text2.length);

    for (let i = 0; i < maxLength; i++) {
      if (text1[i] !== text2[i]) {
        diff.push(`<span class="highlight">${text2[i] || ''}</span>`);
      } else {
        diff.push(text2[i] || '');
      }
    }

    return diff.join('');
  }
}
