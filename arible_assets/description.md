# APP_NAME
Rapid Pages
# COST_DOLLARS
0.5
# SHORT_DESCRIPTION
Rapidly build React.js interfaces with simple text prompts.
# TAGS
3, 8
# DESCRIPTION
Arible interface to [www.rapidpages.com](https://www.rapidpages.com/), generate user interfaces from simple text prompts in seconds.

## Prompting

A prompt is a short text phrase that the Rapidpages interprets to create a User Interface. The large language model breaks down the words and phrases in a prompt into smaller pieces, called tokens, that are compared to its training data and then used to generate a UI. A well-crafted prompt can help make unique and functional interfaces, which can be exported as code.

### Basic Prompts
A basic prompt can be as simple as a few words. For example:

*An interactive quiz builder tool*

The downside of basic prompts is that it’s not very descriptive and therefore the generated might not meet your needs.


### Advanced Prompts
Being very specific and descriptive can help you get a more unique and functional interface. For example:

A modal designed for upgrading to a professional plan in a SaaS interface. It starts with a header “Upgrade to Professional” and includes a section for the current plan details, showing the team name, current plan status, and a “Manage” link. The “Number of seats” section outlines the seats included in the plan and allows users to add additional seats, with the cost per month billed yearly. The “Billing cycle” section offers options for monthly or yearly billing, highlighting a discount for yearly payments. Below this, there’s a section for entering card details, indicating a secure payment with 128-bit SSL encryption. At the bottom, the “Total due” is calculated based on the selected billing cycle and number of seats, with a clear call-to-action button “Agree and purchase” to complete the upgrade process.

The downside of advanced prompts is that it can be very long and difficult to read.

One way to work around this is to attach images when prompting.

![image plus text prompt equals success](https://mintlify.s3-us-west-1.amazonaws.com/rapidpages/images/image-plus-prompt.jpg)
​
### Tips & Tricks
#### ❗️ The more descriptive you are, the more accurate the generated UI will be.
A vague prompt like a CRM for a business can result in a very generic interface. Whereas a more detailed prompt where you describe what the interface of this tool looks like will result in a much more specific and functional interface.

#### 💡 Know your components
Some components have many variants (eg button primary, outline, etc) and these might need to be called out in specific cases. It can be hard for AI to make the connection between the description of the component and the actual variant you want to use.
​
#### 💡 Use images to help your prompts be more descriptive.
You can attach images when prompting, which helps make your prompts more descriptive and accurate. You can use screenshots of your favorite websites as an inspiration for your prompts. If you don’t know where to start, check out our inspire gallery.

#### 💡 Plural words
Plural words leave a lot to chance. Try specific numbers. “Three cards” is more specific than “cards”.

#### ❗️ Focus on What You Want
It is better to describe what you want instead of what you don’t want. This is also true when you’re referring to an image. For example: a modal might have 4 components and we might be interested in only 3 of them. Instead of prompting for a modal without X, it’s usually better to prompt for a modal with T, Y, Z.


## Faq
### What frameworks are supported ?
React, NextJs, Remix
### What styling libraries are supported ?
[Shadcn](https://ui.shadcn.com/)
