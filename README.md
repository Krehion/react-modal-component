# React Modal Component

A lightweight, customizable modal component for React, using React Portals.

## Installation

You can install this package via npm:

```sh
npm install react-amazing-modal-component
```

## Usage

### Basic Example

```jsx
import React, { useState } from "react";
import Modal from "react-amazing-modal-component";
import "react-amazing-modal-component/dist/modal.css"; // Import default styles (optional)

export default function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<h2>Modal Title</h2>
				<p>This is a simple modal example.</p>
				<button onClick={() => setIsOpen(false)}>Close</button>
			</Modal>
		</div>
	);
}
```

## Props

| Prop       | Type   | Required | Description                                                                       |
| ---------- | ------ | -------- | --------------------------------------------------------------------------------- |
| `isOpen`   | `bool` | ✅       | Controls whether the modal is open or closed.                                     |
| `onClose`  | `func` | ✅       | Callback function to close the modal when clicked outside or on the close button. |
| `children` | `node` | ✅       | Content inside the modal.                                                         |

## Customization

You can override the default styles by providing your own CSS.

### Default CSS Classes:

- `.modal-overlay` → The background overlay
- `.modal-content` → The modal container
- `.modal-close` → The close button

#### Example Custom Styling:

```css
.modal-overlay {
	background: rgba(0, 0, 0, 0.7);
}
.modal-content {
	max-width: 500px;
	padding: 20px;
	background: white;
	border-radius: 8px;
}
```

## License

This project is licensed under the MIT License.
