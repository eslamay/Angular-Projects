import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntropyService {
 calculatePasswordEntropy(password: string): number {
  if (!password || password.length === 0) return 0;

  let charsetSize = 0;

  // Numbers
  if (/[0-9]/.test(password)) {
    charsetSize += 10;
  }

  // Lowercase letters
  if (/[a-z]/.test(password)) {
    charsetSize += 26;
  }

  // Uppercase letters
  if (/[A-Z]/.test(password)) {
    charsetSize += 26;
  }

  // Symbols (ASCII printable symbols)
  if (/[^a-zA-Z0-9]/.test(password)) {
    charsetSize += 32; 
  }

  // Safety fallback
  if (charsetSize === 0) {
    return 0;
  }

  // Entropy formula
  const entropy = password.length * Math.log2(charsetSize);

  return Math.round(entropy * 100) / 100; // rounded to 2 decimals
}

}
