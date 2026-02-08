---
uid: TesZnjTCIYNbQTasNWXh
title: PHP is actually a good language
slug: php-is-actually-a-good-language
alias: 
pubDate: 2025-12-23T01:38:00+00:00
all tags: php
make discoverable: True
is page: False
canonical url: 
meta image: 
lang: 
class name: 
first published at: 2025-12-23T01:38:00+00:00
---

PHP is a fantastic programming language. While it is frequently criticized by young developers, it is no longer the mess that it used to be. It has new programming language features that not only make it a wonderful to work in, but is highly readable and maximized developer experience. 

PHP 8 and beyond is genuinely pleasant to work in. It is readable, and packed with features that focus on improved developer experience. Take traits, for example, they can share methods across classes without inheritance.
```php
trait Spellbook {
	public function firebolt() {
		echo 'fire!!!';
	}
}

class Wizard {
	use Spellbook; // The Wizard will now use the spellbook.
	
	public function castFirebolt() {
		echo 'wizard is casting: ';
		$this->firebolt();
	}
}
```
The Wizard class can use the `Spellbook`, but we do not need to have `Wizard` inherit `Spellbook`. Some notable improvements in PHP 8 are union types, the splat operator, and and match expressions.

These features are nice, but when people talk about writing PHP they are actually talking about writing Laravel. Elegant is an incredibly powerful ORM Laravel's ecosystem rivals web frameworks in other languages.

PHP is a great, but I don't think young developers should start learning it. I learned the language and I love it, but jobs are not looking for PHP developers with less than 5 years of professional experience.  I learned it, and I think it is great for building 