module.exports = (program, chalk) => {
    program.usage('<command> [options]');
    program.on('--help', () => {
        console.log('');
        console.log('Example call:');
        console.log('  $ djsbot create base --name my-project');
        console.log(`  Run ${chalk.cyan(`djsbot <command> --help`)} for detailed usage of given command.`);
    });
    const create = require('./commands/create');
    program
        .command('create <bot_type>')
        .description('create discord bot project')
        .option('-n, --name <name>', 'name of bot', 'my-project')
        .option('-p, --prefix <prefix>', 'prefix of command', '!')
        .option('-lg, --language <language>', 'language of bot', 'js')
        //.option('-lo, --local <local>', 'local of bot', 'en')
        .action((type, args) => create(type, args));
    program.parse(process.argv);
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBRXBDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVDQUF1QyxDQUFDLENBQUE7SUFDcEcsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUU1QyxPQUFPO1NBQ0osT0FBTyxDQUFDLG1CQUFtQixDQUFDO1NBQzVCLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQztTQUN6QyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQztTQUN4RCxNQUFNLENBQUMsdUJBQXVCLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxDQUFDO1NBQ3pELE1BQU0sQ0FBQyw0QkFBNEIsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUM7UUFDOUQsdURBQXVEO1NBQ3RELE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUkvQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKHByb2dyYW0sIGNoYWxrKSA9PiB7XHJcbiAgICBwcm9ncmFtLnVzYWdlKCc8Y29tbWFuZD4gW29wdGlvbnNdJylcclxuXHJcbiAgICBwcm9ncmFtLm9uKCctLWhlbHAnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFeGFtcGxlIGNhbGw6Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyAgJCBkanNib3QgY3JlYXRlIGJhc2UgLS1uYW1lIG15LXByb2plY3QnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgICBSdW4gJHtjaGFsay5jeWFuKGBkanNib3QgPGNvbW1hbmQ+IC0taGVscGApfSBmb3IgZGV0YWlsZWQgdXNhZ2Ugb2YgZ2l2ZW4gY29tbWFuZC5gKVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGNyZWF0ZSA9IHJlcXVpcmUoJy4vY29tbWFuZHMvY3JlYXRlJyk7XHJcblxyXG4gICAgICBwcm9ncmFtXHJcbiAgICAgICAgLmNvbW1hbmQoJ2NyZWF0ZSA8Ym90X3R5cGU+JylcclxuICAgICAgICAuZGVzY3JpcHRpb24oJ2NyZWF0ZSBkaXNjb3JkIGJvdCBwcm9qZWN0JylcclxuICAgICAgICAub3B0aW9uKCctbiwgLS1uYW1lIDxuYW1lPicsICduYW1lIG9mIGJvdCcsICdteS1wcm9qZWN0JylcclxuICAgICAgICAub3B0aW9uKCctcCwgLS1wcmVmaXggPHByZWZpeD4nLCAncHJlZml4IG9mIGNvbW1hbmQnLCAnIScpXHJcbiAgICAgICAgLm9wdGlvbignLWxnLCAtLWxhbmd1YWdlIDxsYW5ndWFnZT4nLCAnbGFuZ3VhZ2Ugb2YgYm90JywgJ2pzJylcclxuICAgICAgICAvLy5vcHRpb24oJy1sbywgLS1sb2NhbCA8bG9jYWw+JywgJ2xvY2FsIG9mIGJvdCcsICdlbicpXHJcbiAgICAgICAgLmFjdGlvbigodHlwZSwgYXJncykgPT4gY3JlYXRlKHR5cGUsIGFyZ3MpKVxyXG5cclxuXHJcblxyXG4gICAgcHJvZ3JhbS5wYXJzZShwcm9jZXNzLmFyZ3YpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGJ1aWxkIn0=
