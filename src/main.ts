module.exports = (program, chalk) => {
    program.usage('<command> [options]')

    program.on('--help', () => {
        console.log('');
        console.log('Example call:');
        console.log('  $ djsbot create base --name my-project');
        console.log(`  Run ${chalk.cyan(`djsbot <command> --help`)} for detailed usage of given command.`)
      });

      const create = require('./commands/create');

      program
        .command('create <bot_type>')
        .description('create discord bot project')
        .option('-n, --name <name>', 'name of bot', 'my-project')
        .option('-p, --prefix <prefix>', 'prefix of command', '!')
        .option('-lg, --language <language>', 'language of bot', 'js')
        //.option('-lo, --local <local>', 'local of bot', 'en')
        .action((type, args) => create(type, args))



    program.parse(process.argv);
}