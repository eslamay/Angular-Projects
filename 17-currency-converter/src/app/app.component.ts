import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterService } from './currency-converter.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  amount = 0;
  fromCurrency = 'USD';
  toCurrency = 'EUR';
  convertedAmount: number | null = null;

  currencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];

  currencyFlags: Record<string, string> = {
    USD: '🇺🇸',
    EUR: '🇪🇺',
    GBP: '🇬🇧',
    INR: '🇮🇳',
    JPY: '🇯🇵',
  };

  private converterService = inject(CurrencyConverterService);

  convertCurrency(): void {
    this.convertedAmount = this.converterService.convert(
      this.fromCurrency,
      this.toCurrency,
      this.amount
    );
  }

  getCountryCode(currency: string): string {
  const map: Record<string, string> = {
    USD: 'us',
    EUR: 'eu',
    GBP: 'gb',
    INR: 'in',
    JPY: 'jp',
  };
  return map[currency];
}

}
