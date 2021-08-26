export {};

String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.splitCamelCase = function () {
  return this.replace(/([a-z])([A-Z])/g, "$1 $2");
};

declare global {
  interface String {
    capitalizeFirstLetter(): string;

    splitCamelCase(): string;
  }
}
