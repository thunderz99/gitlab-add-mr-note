import { ArgumentParser } from 'argparse';
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Gitlab } from '@gitbeaker/node'; // All Resources
import { config } from 'dotenv';

config();

const parser = new ArgumentParser({
    description: 'add a note to gitlab mr used in gitlab CI/CD',
});

parser.addArgument('--project', { help: 'project id or project path (e.g. org/prj-name)' });
parser.addArgument('--mr', { help: 'merge request iid' });
parser.addArgument('note', { help: 'note content' });

const api = new Gitlab({
    host: process.env.GITLAB_HOST || 'https://gitlab.com',
    token: process.env.GITLAB_PERSONAL_TOKEN || process.env.GITLAB_TOKEN,
});

const args = parser.parseArgs();

const create_mr_note = async (project: string, mr: string, note: string) => {
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
