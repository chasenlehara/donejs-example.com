import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'example.com/models/test';

F.attach(QUnit);

QUnit.module('example.com functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('example.com main page shows up', function() {
  F('title').text('example.com', 'Title is set');
});
