import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlitediff]'
})
export class HighlitediffDirective implements OnChanges {
  @Input() originalText: string = '';
  @Input() newText: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes as any).originalText || (changes as any).newText) {
      this.highlightDifferences();
    }
  }

  private highlightDifferences() {
    const originalWords = this.originalText.split(' ');
    const newWords = this.newText.split(' ');
    const highlightedWords = [];

    for (let i = 0; i < originalWords.length || i < newWords.length; i++) {
      const originalWord = originalWords[i] || '';
      const newWord = newWords[i] || '';

      if (originalWord !== newWord) {
        highlightedWords.push(`<span class="highlight">${newWord}</span>`);
      } else {
        highlightedWords.push(newWord);
      }
    }

    const highlightedText = highlightedWords.join(' ');
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', highlightedText);
  }
}