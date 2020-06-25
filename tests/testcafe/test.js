
fixture `example`
    .page `http://example.com`;

test('Example', async t => {
    console.log('test function is running...');
    console.log(require('testcafe/package').version);
    console.log(require('testcafe-react-selectors').version);
    await t.click('h1');
});
