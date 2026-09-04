import Handlebars from "handlebars";


const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>{{name}} - Resume</title>

    <style>

        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
            color: #222;
            background: #fff;
            line-height: 1.5;
        }

        .resume {
            width: 800px;
            margin: 40px auto;
            padding: 40px 50px;
        }

        .header {
            text-align: center;
            border-bottom: 2px solid #222;
            padding-bottom: 18px;
            margin-bottom: 25px;
        }

        .name {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .contact {
            font-size: 13px;
            color: #555;
        }

        .contact a {
            color: #555;
            text-decoration: none;
        }

        .section {
            margin-bottom: 22px;
        }

        .section-title {
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            border-bottom: 1px solid #bbb;
            padding-bottom: 4px;
            margin-bottom: 12px;
        }

        .summary {
            font-size: 14px;
        }

        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
        }

        .skill {
            background: #f1f1f1;
            padding: 4px 9px;
            border-radius: 4px;
            font-size: 12px;
        }

        .item {
            margin-bottom: 16px;
        }

        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .item-title {
            font-weight: 700;
            font-size: 14px;
        }

        .item-company {
            font-size: 14px;
            color: #444;
        }

        .item-date {
            font-size: 12px;
            color: #666;
            white-space: nowrap;
        }

        .item-location {
            font-size: 12px;
            color: #666;
        }

        ul {
            margin-top: 7px;
            padding-left: 20px;
        }

        li {
            font-size: 13px;
            margin-bottom: 4px;
        }

        .technologies {
            font-size: 12px;
            color: #666;
            margin-top: 3px;
        }

        .details {
            font-size: 12px;
            color: #555;
        }

    </style>
</head>

<body>

<div class="resume">

    <!-- HEADER -->

    <div class="header">

        <div class="name">
            {{name}}
        </div>

        <div class="contact">

            {{contact.phone}}

            {{#if contact.email}}
                | <a href="mailto:{{contact.email}}">
                    {{contact.email}}
                  </a>
            {{/if}}

            {{#if contact.linkedin}}
                | <a href="{{contact.linkedin}}">
                    LinkedIn
                  </a>
            {{/if}}

            {{#if contact.github}}
                | <a href="{{contact.github}}">
                    GitHub
                  </a>
            {{/if}}

        </div>

    </div>


    <!-- SUMMARY -->

    {{#if summary}}

    <section class="section">

        <div class="section-title">
            Professional Summary
        </div>

        <div class="summary">
            {{summary}}
        </div>

    </section>

    {{/if}}


    <!-- SKILLS -->

    {{#if skills.length}}

    <section class="section">

        <div class="section-title">
            Technical Skills
        </div>

        <div class="skills">

            {{#each skills}}

                <span class="skill">
                    {{this}}
                </span>

            {{/each}}

        </div>

    </section>

    {{/if}}


    <!-- EXPERIENCE -->

    {{#if experience.length}}

    <section class="section">

        <div class="section-title">
            Professional Experience
        </div>

        {{#each experience}}

        <div class="item">

            <div class="item-header">

                <div>

                    <div class="item-title">
                        {{jobTitle}}
                    </div>

                    <div class="item-company">
                        {{company}}
                    </div>

                    <div class="item-location">
                        {{location}}
                    </div>

                </div>

                <div class="item-date">
                    {{startDate}} – {{endDate}}
                </div>

            </div>


            {{#if bullets.length}}

            <ul>

                {{#each bullets}}

                    <li>
                        {{this}}
                    </li>

                {{/each}}

            </ul>

            {{/if}}

        </div>

        {{/each}}

    </section>

    {{/if}}


    <!-- EDUCATION -->

    {{#if education.length}}

    <section class="section">

        <div class="section-title">
            Education
        </div>

        {{#each education}}

        <div class="item">

            <div class="item-header">

                <div>

                    <div class="item-title">
                        {{degree}}
                    </div>

                    <div class="item-company">
                        {{institution}}
                    </div>

                    <div class="item-location">
                        {{location}}
                    </div>

                </div>

                <div class="item-date">
                    {{startDate}} – {{endDate}}
                </div>

            </div>

            {{#if details}}

            <div class="details">
                {{details}}
            </div>

            {{/if}}

        </div>

        {{/each}}

    </section>

    {{/if}}


    <!-- PROJECTS -->

    {{#if projects.length}}

    <section class="section">

        <div class="section-title">
            Projects
        </div>

        {{#each projects}}

        <div class="item">

            <div class="item-title">
                {{name}}
            </div>

            <div class="technologies">
                {{technologies}}
            </div>

            {{#if bullets.length}}

            <ul>

                {{#each bullets}}

                    <li>
                        {{this}}
                    </li>

                {{/each}}

            </ul>

            {{/if}}

        </div>

        {{/each}}

    </section>

    {{/if}}


    <!-- CERTIFICATIONS -->

    {{#if certifications.length}}

    <section class="section">

        <div class="section-title">
            Certifications
        </div>

        <ul>

            {{#each certifications}}

                <li>
                    {{this}}
                </li>

            {{/each}}

        </ul>

    </section>

    {{/if}}


    <!-- AWARDS -->

    {{#if awards.length}}

    <section class="section">

        <div class="section-title">
            Awards
        </div>

        <ul>

            {{#each awards}}

                <li>
                    {{this}}
                </li>

            {{/each}}

        </ul>

    </section>

    {{/if}}

</div>

</body>

</html>
`;

const template = Handlebars.compile(htmlTemplate);

export { template };
