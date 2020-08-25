"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const argparse_1 = require("argparse");
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const node_1 = require("@gitbeaker/node"); // All Resources
const dotenv_1 = require("dotenv");
dotenv_1.config();
const parser = new argparse_1.ArgumentParser({
    description: 'add a note to gitlab mr used in gitlab CI/CD',
});
parser.addArgument('--project', { help: 'project id or project path' });
parser.addArgument('--mr', { help: 'merge request iid' });
parser.addArgument('note', { help: 'note content' });
const api = new node_1.Gitlab({
    host: process.env.GITLAB_HOST || 'https://gitlab.com',
    token: process.env.GITLAB_PERSONAL_TOKEN || process.env.GITLAB_TOKEN,
});
const args = parser.parseArgs();
const create_mr_note = async (project, mr, note) => {
    const result = await api.MergeRequestNotes.create(project, mr, note);
    console.log('mr note result:', result);
    return result;
};
create_mr_note(args.project, args.mr, args.note)
    .then(() => {
    //
})
    .catch(err => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map