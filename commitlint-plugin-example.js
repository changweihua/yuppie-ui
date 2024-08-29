// commitlint-plugin-example.js
module.exports = {
    rules: {
        'example-rule': ({ subject }) => {
            return [subject.includes('example'), 'Your commit message must contain the word "example"'];
        }
    }
};
