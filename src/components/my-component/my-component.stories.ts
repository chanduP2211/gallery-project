export default{
    tag:"Component/MyComponent",
    argTypes: {
        backgroundColor: { control: 'color' },
        first: {control: 'text'},
        middle: {control: 'text'},
        last: {control: 'text'}
        },
}


const Template = (argTypes)=>`<my-component first='${argTypes.first}' middle='${argTypes.middle}' last='${argTypes.last}' backgroundColor='${argTypes.backgroundColor}'></my-component>`

export const demo = Template.bind({})
demo.storyName = "Demo Story"
