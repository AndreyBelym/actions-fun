fixture `example`
    .page `http://example.com`;

test('Example', async t => {
    console.log('test function is running...');

    await t.click('h1');
});
