/* tslint:disable */
/* eslint-disable */
/**
*/
export function main(): void;
/**
*/
export class Acute32SymcodeMain {
  free(): void;
/**
* @returns {Acute32SymcodeMain}
*/
  static new(): Acute32SymcodeMain;
/**
* @param {BigInt} seed
*/
  seed_rng(seed: BigInt): void;
/**
* Takes the id of the canvas element storing the alphabet.
* @param {string} canvas_id
*/
  load_alphabet_from_canvas_id(canvas_id: string): void;
/**
* @param {string} canvas_id
* @returns {string}
*/
  scan_from_canvas_id(canvas_id: string): string;
/**
* @param {string} canvas_id
* @param {string} payload
* @returns {string}
*/
  generate_symcode_to_canvas(canvas_id: string, payload: string): string;
/**
* @param {string} canvas_id
* @returns {string}
*/
  generate_random_symcode_to_canvas(canvas_id: string): string;
}
