// Task 11: Brand convention & Nominal typing

// MajorCredits interface with unique brand
export interface MajorCredits {
  credits: number;
  brand: "major";
}

// MinorCredits interface with unique brand
export interface MinorCredits {
  credits: number;
  brand: "minor";
}

// Sum two MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major",
  };
}

// Sum two MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor",
  };
}
