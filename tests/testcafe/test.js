
fixture `example`
    .page `http://example.com`;

test('Example', async t => {
    console.log('test function is running...');
    console.log(require('testcafe/package').version);
    await t.click('h1');
});
