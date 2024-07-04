interface MajorCredits {
  credits: number;
  _brand: "majorCredit";
}

interface MinorCredits {
  credits: number;
  _brand: "minorCredit";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
  return subject1.credits + subject2.credits
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
  return subject1.credits + subject2.credits
}
