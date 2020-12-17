
fixture `example`
    .page `http://example.com`;

test('Example', async t => {
    if (process.versions.node.startsWith('12.'))
        throw new Error();
    console.log('test function is running...');
    console.log(require('testcafe/package').version);
    console.log(require('testcafe-react-selectors'));
    await t.click('h1');
});
