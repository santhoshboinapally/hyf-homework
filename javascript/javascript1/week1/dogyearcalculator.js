const dogYearOfBirth = 2015;
const dogYearFuture = 2045;
const shouldShowResultInDogYears = false;
const dogYear = dogYearFuture - dogYearOfBirth;
if (shouldShowResultInDogYears) {
    console.log(`your dog will be ${dogYear*7} dog years old in ${dogYearFuture}`);
} else {
    console.log(`your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}
