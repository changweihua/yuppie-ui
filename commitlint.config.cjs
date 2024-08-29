// commit-lint config
module.exports = {
    // extends: ['@commitlint/config-conventional'],
    extends: ['git-commit-emoji', 'cz'],
    // plugins: ['./commitlint-plugin-example'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'types'],
        ],
        // 'example-rule': [2, 'always']
    },
};

