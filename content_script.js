walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	if (/\bBABCOCK\b/g.test(v)) {
		v = v.replace(/\bBABCOCK\b/g, "DAD BAB CLOCK");
	} else {
		v = v.replace(/\bBabcock\b/ig, "Dad Bab Clock");
	}
	
	textNode.nodeValue = v;
}