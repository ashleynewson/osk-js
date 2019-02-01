window.osk_api = function(){
    let keyboardStyle = `
      .keyboard {
        font-size: 0pt;
        background-image: linear-gradient(to bottom right, #333, #222);
        padding: 16pt;
      }
      .keyboard * {
        display: inline-block;
        vertical-align: middle;
        padding: 0pt;
        border: 0pt;
        margin: 0pt;
      }
      .keyboard button {
        font-family: monospace;
        width:  32pt;
        height: 32pt;
        background-image: linear-gradient(to bottom right, #acc, #899);
      }
      .keyboard button.pressed {
        background-image: linear-gradient(to bottom right, #fcc, #b99);
      }
    `;
    let keyboardLayout = [
        // width, label, code, keyCode, press, key, shiftKey, capitalKey, numKey
        [1, 'Esc', 'Escape', 27, true],
        1/3,
        [1, 'F1', 'F1', 112, true],
        [1, 'F2', 'F2', 113, true],
        [1, 'F3', 'F3', 114, true],
        [1, 'F4', 'F4', 115, true],
        1/3,
        [1, 'F5', 'F5', 116, true],
        [1, 'F6', 'F6', 117, true],
        [1, 'F7', 'F7', 118, true],
        [1, 'F8', 'F8', 119, true],
        1/3,
        [1, 'F9', 'F9', 120, true],
        [1, 'F10', 'F10', 121, true],
        [1, 'F11', 'F11', 122, true],
        [1, 'F12', 'F12', 123, true],
        1.5,
        "NumLock",
        "CapsLock",
        "ScrollLock",
        1.5,
        [1, 'PrtSc\nSysRq', 'PrintScreen', 44], // 44 or 124 or 42
        [1, 'Scrll', 'ScrollLock', 145], // 145 or 125
        [1, 'Pause\nBreak', 'Paus', 19], // 19 or 126
        "endrow",
        "rule",
        "endrow",
        [1, "~\n`", 'Backquote', 192, true, '`', '~'],
        [1, "!\n1", 'Digit1', 49, true, '1', '!'],
        [1, "\"\n2", 'Digit2', 50, true, '2', '@'],
        [1, "#\n3", 'Digit3', 51, true, '3', '#'],
        [1, "$\n4", 'Digit4', 52, true, '4', '$'],
        [1, "%\n5", 'Digit5', 53, true, '5', '%'],
        [1, "^\n6", 'Digit6', 54, true, '6', '^'],
        [1, "&\n7", 'Digit7', 55, true, '7', '&'],
        [1, "*\n8", 'Digit8', 56, true, '8', '*'],
        [1, "(\n9", 'Digit9', 57, true, '9', '('],
        [1, ")\n0", 'Digit0', 58, true, '0', ')'],
        [1, "_\n-", 'Minus', 173, true, '-', '_'],
        [1, "+\n=", 'Equal', 61, true, '=', '+'],
        [2, 'Backspace', 'Backspace', 8],
        0.5,
        [1, 'Ins', 'Insert', 45],
        [1, 'Home', 'Home', 36],
        [1, 'Page\nUp', 'PageUp', 33],
        0.5,
        [1, 'Num', 'NumLock', 144],
        [1, '/', 'NumpadDivide', 111, true, '/'],
        [1, '*', 'NumpadMultiply', 106, true, '*'],
        [1, '-', 'NumpadSubtract', 109, true, '-'],
        "endrow",
        [1.5, 'Tab', 'Tab', 9, true],
        [1, 'Q', 'KeyQ', 81, true, 'q', 'Q', 'Q'],
        [1, 'W', 'KeyW', 87, true, 'w', 'W', 'W'],
        [1, 'E', 'KeyE', 69, true, 'e', 'E', 'E'],
        [1, 'R', 'KeyR', 82, true, 'r', 'R', 'R'],
        [1, 'T', 'KeyT', 84, true, 't', 'T', 'T'],
        [1, 'Y', 'KeyY', 89, true, 'y', 'Y', 'Y'],
        [1, 'U', 'KeyU', 85, true, 'u', 'U', 'U'],
        [1, 'I', 'KeyI', 73, true, 'i', 'I', 'I'],
        [1, 'O', 'KeyO', 79, true, 'o', 'O', 'O'],
        [1, 'P', 'KeyP', 80, true, 'p', 'P', 'P'],
        [1, "{\n[", 'BracketLeft', 219, true, '[', '{'],
        [1, "}\n]", 'BracketRight', 221, true, ']', '}'],
        [1.5, "|\n\\", 'IntlBackslash', 220, true, '\\', '|'],
        0.5,
        [1, 'Del', 'Delete', 46],
        [1, 'End', 'End', 35],
        [1, 'Page\nDown', 'PageDown', 34],
        0.5,
        [1, '7', 'Numpad7', 103, true, 'Home', undefined, undefined, '7'],
        [1, '8', 'Numpad8', 104, true, 'ArrowUp', undefined, undefined, '8'],
        [1, '9', 'Numpad9', 105, true, 'PageUp', undefined, undefined, '9'],
        [1, '+', 'NumpadAdd', 107, true],
        "endrow",
        [1.75, 'Caps', 'CapsLock', 20],
        [1, 'A', 'KeyA', 65, true, 'a', 'A', 'A'],
        [1, 'S', 'KeyS', 83, true, 's', 'S', 'S'],
        [1, 'D', 'KeyD', 68, true, 'd', 'D', 'D'],
        [1, 'F', 'KeyF', 70, true, 'f', 'F', 'F'],
        [1, 'G', 'KeyG', 71, true, 'g', 'G', 'G'],
        [1, 'H', 'KeyH', 72, true, 'h', 'H', 'H'],
        [1, 'J', 'KeyJ', 74, true, 'j', 'J', 'J'],
        [1, 'K', 'KeyK', 75, true, 'k', 'K', 'K'],
        [1, 'L', 'KeyL', 76, true, 'l', 'L', 'L'],
        [1, ':\n;', 'Semicolon', 59, true, ';', ':'],
        [1, "\"\n'", 'Quote', 222, true, "'", '"'],
        [2.25, 'Enter', 'Enter', 13, true],
        4,
        [1, '4', 'Numpad4', 100, true, 'ArrowLeft', undefined, undefined, '4'],
        [1, '5', 'Numpad5', 101, true, '5', undefined, undefined, '5'],
        [1, '6', 'Numpad6', 102, true, 'ArrowRight', undefined, undefined, '6'],
        "endrow",
        [2.25, 'Shift', 'ShiftLeft', 16, false, "Shift"],
        [1, 'Z', 'KeyZ', 90, true, 'z', 'Z', 'Z'],
        [1, 'X', 'KeyX', 88, true, 'x', 'X', 'X'],
        [1, 'C', 'KeyC', 67, true, 'c', 'C', 'C'],
        [1, 'V', 'KeyV', 86, true, 'v', 'V', 'V'],
        [1, 'B', 'KeyB', 66, true, 'b', 'B', 'B'],
        [1, 'N', 'KeyN', 78, true, 'n', 'N', 'N'],
        [1, 'M', 'KeyM', 77, true, 'm', 'M', 'M'],
        [1, '<\n,', 'Comma', 188, true, ',', '<'],
        [1, '>\n.', 'Period', 190, true, '.', '>'],
        [1, '?\n/', 'Slash', 191, true, '/', '?'],
        [2.75, 'Shift', 'ShiftRight', 16, false, "Shift"],
        1.5,
        [1, 'Up', 'ArrowUp', 38],
        1.5,
        [1, '1', 'Numpad1', 97, true, 'End', undefined, undefined, '1'],
        [1, '2', 'Numpad2', 98, true, 'ArrowDown', undefined, undefined, '2'],
        [1, '3', 'Numpad3', 99, true, 'PageDown', undefined, undefined, '3'],
        "endrow",
        [1.5, 'Ctrl', 'ControlLeft', 17, false, "Control"],
        [1.25, 'OS', 'OSLeft', 91, false, "OSLeft"], // 91 or 224
        [1.25, 'Alt', 'AltLeft', 18, false, "Alt"],
        [5.75, '', 'Space', 32, ' '],
        [1.25, 'Alt', 'AltRight', 225, false, 'AltGraph'], // Sometimes not Alt Gr?
        [1.25, 'OS', 'OSRight', 92, false, "OSRight"], // 91 or 92 or 93 or 224
        [1.25, 'Menu', 'ContextMenu', 93],
        [1.5, 'Ctrl', 'ControlRight', 17, false, "Control"],
        0.5,
        [1, 'Lt', 'ArrowLeft', 37],
        [1, 'Dn', 'ArrowDown', 40],
        [1, 'Rt', 'ArrowRight', 39],
        0.5,
        [2, '0', 'Numpad0', 96, true, 'Insert', undefined, undefined, '0'],
        [1, '.', 'NumpadDecimal', 110, true, 'Delete', undefined, undefined, '.'],
        [1, 'Entr', 'NumpadEnter', 13, true, 'Enter', undefined, undefined, 'Enter'],
        "endrow",
    ];

    let codeToKey = {};
    let codeToShiftedKey = {};
    let codeToCapitalKey = {};
    let codeToNumKey = {};
    let codeToKeyCode = {};
    let codePressable = {};
    let codeToElement = {};
    let modalState = {
        NumLock: false,
        CapsLock: false,
        ScrollLock: false,
    };
    let modalElement = {};
    let keyStates = {};
    function key_properties(code) {
        let shifted = keyStates.ShiftLeft || keyStates.ShiftRight || false;
        let key = (shifted && modalState.CapsLock && codeToCapitalKey[code])
                    ? (codeToKey[code])
                : shifted
                    ? (codeToShiftedKey[code] || codeToCapitalKey[code] || codeToKey[code])
                : modalState.CapsLock
                    ? (codeToCapitalKey[code] || codeToKey[code])
                : codeToKey[code];
        return {
            view: window,
            bubbles: true,
            cancelable: true,
            keyCode: codeToKeyCode[code],
            key: key,
            code: code,
            ctrlKey: keyStates.ControlLeft || keyStates.ControlRight || false,
            shiftKey: shifted,
            altKey: keyStates.AltLeft || keyStates.AltRight || false,
            metaKey: keyStates.MetaLeft || keyStates.MetaRight || false,
        };
    }
    function down_handler(code) {
        return function(e) {
            keyStates[code] = true;
            codeToElement[code].classList.add('pressed');
            let properties = key_properties(code);
            document.activeElement.dispatchEvent(new KeyboardEvent('keydown', properties));
            if (   properties.code === 'NumLock'
                || properties.code === 'CapsLock'
                || properties.code === 'ScrollLock')
            {
                modalState[code] = !modalState[code];
                modalElement[code].checked = modalState[code];
            }
            if (codePressable[code]) {
                document.activeElement.dispatchEvent(new KeyboardEvent('keypress', properties));
            }
        }
    }
    function up_handler(code) {
        return function(e) {
            keyStates[code] = false;
            codeToElement[code].classList.remove('pressed');
            let properties = key_properties(code);
            document.activeElement.dispatchEvent(new KeyboardEvent('keyup', properties));
        }
    }

    function attach_keyboard(document) {
        for (let code in codeToKey) {
            if (codeToKey.hasOwnProperty(code)) {
                let button = document.getElementById('key_'+code);
                if (button) {
                    button.addEventListener('mousedown', down_handler(code));
                    button.addEventListener('mouseup',   up_handler(code));
                }
            }
        }
    }

    function generate_keyboard(document, layout) {
        let head = document.getElementsByTagName('head')[0];
        let body = document.body;

        let style = document.createElement('style');
        style.type = 'text/css';
        if(style.styleSheet){
            style.styleSheet.cssText = keyboardStyle;
        }else{
            style.appendChild(document.createTextNode(keyboardStyle));
        }
        head.appendChild(style);
        let keyboard = document.createElement('div');
        keyboard.className = "keyboard";
        body.appendChild(keyboard);
        function size(x) {
            return (48*x)+'pt';
        }
        for (let item of layout) {
            if (item === "endrow") {
                keyboard.appendChild(document.createElement('br'));
            }
            else if (item === "rule") {
                let span = document.createElement('span');
                span.style.height = size(0.5);
                keyboard.appendChild(span);
            }
            else if (item === 'NumLock' || item === 'CapsLock' || item === 'ScrollLock') {
                let input = document.createElement('input');
                input.type = "checkbox";
                input.addEventListener('change', function(e){
                    modalState[item] = e.checked;
                });
                input.style.width = size(1);
                input.style.height = size(1);
                modalElement[item] = input;
                keyboard.appendChild(input);
            }
            else if (typeof(item) === 'number') {
                let span = document.createElement('span');
                span.style.width = size(item);
                span.style.height = '0pt';
                keyboard.appendChild(span);
            }
            else if (item instanceof Array) {
                // width, label, code, keyCode, press, key, shiftKey, capitalKey, numKey
                let button = document.createElement('button');
                let pre = document.createElement('pre');
                button.style.width = size(item[0]);
                button.style.height = size(1);
                pre.textContent = item[1];
                button.appendChild(pre);
                let code = item[2];
                button.id = code;
                codeToElement[code] = button;
                codeToKeyCode[code] = item[3];
                codePressable[code] = (item.length > 4) ? item[4] : false;
                codeToKey[code] = (item.length > 5) ? item[5] : code;
                codeToShiftedKey[code] = (item.length > 6) ? item[6] : undefined;
                codeToCapitalKey[code] = (item.length > 7) ? item[7] : undefined;
                codeToNumKey[code] = (item.length > 8) ? item[8] : undefined;
                button.addEventListener('mousedown', down_handler(code));
                button.addEventListener('mouseup'  , up_handler(code));
                keyboard.appendChild(button);
            }
        }
        let relayOption = document.createElement('input');
        relayOption.type = 'checkbox';
        let relayText = document.createElement('span');
        relayText.textContent = 'Relay actual events';
        body.appendChild(relayOption);
        body.appendChild(relayText);

        body.addEventListener('keydown', function(e){
            if (relayOption.checked) {
                down_handler(e.code)();
            }
        });
        body.addEventListener('keyup', function(e){
            if (relayOption.checked) {
                up_handler(e.code)();
            }
        });
    }

    return {
        emulate_down: function(code) {
            down_handler(code)();
        },
        emulate_up: function(code) {
            up_handler(code)();
        },
        load_keyboard: function(window) {
            let document = window.document;
            let head = document.getElementsByTagName('head')[0];
            head.innerHTML = "<title>osk-js On Screen Keyboard</title>";
            let body = document.body;
            body.innerHTML = "";
            generate_keyboard(document, keyboardLayout);
        },
        append_keyboard: function(window) {
            let document = window.document;
            generate_keyboard(document, keyboardLayout);
        },
    };
}();

window.open("javascript:window.opener.osk_api.load_keyboard(window)", 'keyboardPopup', 'width=1600,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no');
